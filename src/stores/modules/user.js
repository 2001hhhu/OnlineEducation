import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userInfoService } from '@/api/user.js'

// 用户模块
export const useUserStore = defineStore(
  'big-user',
  () => {
    //user-token
    const token = ref('') // 定义 token
    const setToken = (newToken) => (token.value = newToken) // 设置 token
    const removeToken = () => {
      token.value = ''
    }
    //user-info
    const user = ref({})
    const getUser = async () => {
      const res = await userInfoService()
      user.value = res.data[0]
    }
    const setUser = (obj) => {
      user.value = obj
    }
    return { token, setToken, removeToken, user, getUser, setUser }
  },
  {
    persist: true // 持久化
  }
)

import axios from 'axios'
// import { useUserStore } from '../stores/modules/user'
import router from '@/router'
const baseURL = 'http://localhost:3000'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    // const useStore = useUserStore()
    // if (useStore.token) {
    //   config.headers.Authorization = useStore.token
    // }
    // console.log(config)
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    // if (res.status >= 100 && res.status < 400) return res
    if (res.data.length === 0) {
      ElMessage.error('账号不存在')
      return Promise.reject(res.data)
    }
    return res
  },
  (err) => {
    if (err.response.status >= 400 && err.response.status < 500) {
      ElMessage.error(err.response.status)
      router.push('/home')
    }
    ElMessage.error(err.response.data.error)
    return Promise.reject(err.response.data.error)
  }
)

export default instance
export { baseURL }

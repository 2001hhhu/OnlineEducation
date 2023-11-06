import { defineStore } from 'pinia'
import { ref } from 'vue'
import { activateService, learnService } from '@/api/report.js'

export const useReportStore = defineStore(
  'report',
  () => {
    // 获取用户活跃度
    const activateModule = ref({})
    const getActivateModule = async (id) => {
      const res = await activateService(id)
      activateModule.value = res.data
    }

    //获取用户学习进度
    const learnModule = ref({})
    const getLearnModule = async (user) => {
      const res = await learnService(user)
      learnModule.value = res.data
    }
    return {
      activateModule,
      getActivateModule,
      learnModule,
      getLearnModule
    }
  },
  {
    persist: true
  }
)

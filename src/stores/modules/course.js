import { defineStore } from 'pinia'
import { ref } from 'vue'
import { evaluateService, courseService } from '@/api/course.js'

export const useCourseStore = defineStore(
  'course',
  () => {
    // 获取用户评价数据
    const userEvaluate = ref({})
    const getUserEvaluate = async (userId, courseId) => {
      const res = await evaluateService(userId, courseId)
      userEvaluate.value = res.data
    }

    // 获取单节课的数据
    const courseInfo = ref()
    const getCourseInfo = async (courseId) => {
      const res = await courseService(courseId)
      courseInfo.value = res.data[0]
    }

    return {
      userEvaluate,
      getUserEvaluate,
      courseInfo,
      getCourseInfo
    }
  },
  {
    persist: true
  }
)

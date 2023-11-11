import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  evaluateService,
  evaluatePostService,
  courseService,
  evaluateDeleteService,
  evaluateUpdateService
} from '@/api/course.js'

export const useCourseStore = defineStore(
  'course',
  () => {
    // 获取用户评价数据
    const userEvaluate = ref({})
    const getUserEvaluate = async (userId, courseId) => {
      const res = await evaluateService(userId, courseId)
      userEvaluate.value = res.data
      // console.log(res)
    }
    const putEvaluate = async (obj) => {
      const res = await evaluatePostService(obj)
      console.log(res)
    }
    const deleteEvaluate = async (id) => {
      const res = await evaluateDeleteService(id)
      console.log(res)
      userEvaluate.value = ''
    }
    const updateEvaluate = async (id, obj) => {
      const res = await evaluateUpdateService(id, obj)
      console.log(res)
      userEvaluate.value = obj
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
      putEvaluate,
      deleteEvaluate,
      updateEvaluate,
      courseInfo,
      getCourseInfo
    }
  },
  {
    persist: true
  }
)

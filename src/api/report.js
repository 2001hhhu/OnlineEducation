import request from '@/utils/request.js'

export const activateService = (id) => {
  return request.get(`/activate/${id}`)
}

export const sourceService = (id) => {
  return request.get(`/source/${id}`)
}

export const learnService = (user) => {
  return request.get(`/learn/?user=${user}`)
}

export const learnCourseService = (user, courseId) => {
  return request.get(`/learn/?user=${user}&ccourseId=${courseId}`)
}

export const courseService = (user) => {
  return request.get(`/course/?user=${user}`)
}

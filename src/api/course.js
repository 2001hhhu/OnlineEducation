import request from '@/utils/request.js'

export const courseCategoryService = () => {
  // /user?username=admin&password=123456
  return request.get('/coursecategory')
}

export const courseAllListService = () => {
  return request.get('/courselist')
}

export const courseListService = (term, category, state) => {
  // /user?username=admin&password=123456
  if (term === '全部' && category === '全部' && state === '全部') {
    return request.get('/courselist')
  } else if (term === '全部' && category === '全部') {
    return request.get(`/courselist?state=${state}`)
  } else if (term === '全部' && state === '全部') {
    return request.get(`/courselist?category=${category}`)
  } else if (category === '全部' && state === '全部') {
    return request.get(`/courselist?term=${term}`)
  } else if (term === '全部') {
    return request.get(`/courselist?category=${category}&state=${state}`)
  } else if (category === '全部') {
    return request.get(`/courselist?term=${term}&state=${state}`)
  } else if (state === '全部') {
    return request.get(`/courselist?term=${term}&category=${category}`)
  } else {
    return request.get(`/courselist?term=${term}&category=${category}&state=${state}`)
  }
}

export const courseService = (courseId) => {
  return request.get(`/courselist?id=${courseId}`)
}

export const courseSearchService = async (str) => {
  const res1 = request.get(`/courselist?name=${str}`)
  const res2 = request.get(`/courselist?lecturer=${str}`)
  let res = await res1
  if (res.data.length === 0) {
    return res2
  }
  return res1
}

export const evaluateService = (userId, courseId) => {
  return request.get(`/evaluate?course=${courseId}&user=${userId}`)
}

export const evaluatePostService = (obj) => {
  return request.post('/evaluate?course', obj)
}

export const evaluateDeleteService = (id) => {
  return request.delete(`/evaluate/${id}`)
}

export const evaluateUpdateService = (id, obj) => {
  return request.put(`/evaluate/${id}`, obj)
}

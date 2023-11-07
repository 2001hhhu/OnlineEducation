import request from '@/utils/request.js'

export const courseCategoryService = () => {
  // /user?username=admin&password=123456
  return request.get('/coursecategory')
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

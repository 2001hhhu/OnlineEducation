import request from '@/utils/request.js'

export const courseCategoryService = () => {
  // /user?username=admin&password=123456
  return request.get('/coursecategory')
}

export const courseListService = () => {
  // /user?username=admin&password=123456
  return request.get('/courselist')
}

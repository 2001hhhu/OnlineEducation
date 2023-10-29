import request from '@/utils/request.js'

export const userLoginService = ({ username, password }) => {
  return request.post('/user', { username, password })
}

export const userRegisterService = ({ username, password }) => {
  return request.post('/user', { username, password })
}

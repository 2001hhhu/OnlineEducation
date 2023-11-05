import request from '@/utils/request.js'

// export const userLoginService = ({ username, password }) => {
//   return request.get('/user', { username, password })
// }

// export const userRegisterService = ({ username, password }) => {
//   return request.post('/user', { username, password })
// }

export const userLoginService = ({ username, password }) => {
  // /user?username=admin&password=123456
  return request.get(`/user?username=${username}&password=${password}`)
}

export const userRegisterService = ({ username, password }) => {
  return request.post('/user', { username, password })
}

export const userInfoService = () => {
  return request.get('/userinfo')
}

export const updateUserInfoService = (id, obj) => {
  return request.put(`/userinfo/${id}`, obj)
}

import { request } from '@/utils/requset.js'

export const userLoginService = ({ username, password }) => {
  request.post('', { username, password })
}

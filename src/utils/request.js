import axios from 'axios'
import { useUserStore } from '../stores/modules/user'
// import router from '@/router'
const baseURL = ''
// import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (err) => {
    return err
  }
)

instance.interceptors.response.use(
  (res) => {
    return Promise.reject(res)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }

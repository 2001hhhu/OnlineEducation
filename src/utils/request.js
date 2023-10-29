import axios from 'axios'
// import { useUserStore } from '../stores/modules/user'
// import router from '@/router'
const baseURL = 'http://localhost:3000'
// import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    // const useStore = useUserStore()
    // if (useStore.token) {
    //   config.headers.Authorization = useStore.token
    // }
    return config
  },
  (err) => {
    return err
  }
)

instance.interceptors.response.use(
  (res) => {
    console.log(1)
    return res
  },
  (err) => {
    // if (err.response.status >= 400 && err.response.status < 500) {
    //   router.push('/login')
    // }
    return Promise.reject(err.response.data.error)
  }
)

export default instance
export { baseURL }

// 目的是为了给axios做进一步封装，加上请求拦截器
import axios from 'axios'

// 打开携带 Cookie 开关，默认是关闭的
axios.defaults.withCredentials = true
// 创建一个 Axios 实例
const service = axios.create({
  baseURL: 'api',
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  (req) => {
    // 在发送请求之前做一些处理，比如添加请求头、处理请求参数等
    const headers = req.headers
    let token = ''
    try {
      token = localStorage.getItem('token')
    } catch (e) {
      token = ''
    }
    if (!headers.Authorization) {
      headers.Authorization = `Bearer ${token}`
    }

    return req
  },
  (error) => {
    // 请求错误时的处理
    // ...

    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理，比如解析数据、处理错误状态码等
    // ...

    return response.data
  },
  (error) => {
    // 响应错误时的处理
    // ...

    return Promise.reject(error)
  },
)

export default service

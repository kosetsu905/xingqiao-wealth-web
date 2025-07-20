import axios from 'axios'
import { getToken } from '@/utils/auth'
import cache from '@/plugins/cache'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=utf-8','X-Client-Type': 'client' }
})

// 在请求拦截器前添加路由白名单配置
const whiteList = ['/client/auth/login', '/client/auth/register', '/client/auth/sendCode'] // 登录、注册、验证码接口


// 请求拦截器
service.interceptors.request.use(config => {

  // 添加白名单判断
  if (whiteList.includes(config.url)) {
    config.headers.isToken = false   // 不携带token
    config.headers.repeatSubmit = false // 不校验重复提交
  }

  // Token 处理
  if (getToken() && config.headers.isToken !== false) {
    config.headers.Authorization = `Bearer ${getToken()}`
  }

  // GET 参数处理
  if (config.method === 'get' && config.params) {
    config.url += '?' + new URLSearchParams(config.params).toString()
    config.params = undefined
  }

  // 重复提交校验
  if (['post', 'put'].includes(config.method.toLowerCase()) && config.headers.repeatSubmit !== false) {
    const requestKey = JSON.stringify({
      url: config.url,
      data: config.data
    })

    const lastRequest = cache.session.getJSON('lastRequest')
    if (lastRequest?.key === requestKey && Date.now() - lastRequest.time < 1000) {
      return Promise.reject(new Error('数据正在处理，请勿重复提交'))
    }
    cache.session.setJSON('lastRequest', { key: requestKey, time: Date.now() })
  }

  return config
}, error => Promise.reject(error))

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { data } = response
    if (response.config.responseType === 'blob') return data

    if (data.code && data.code !== 200) {
      return Promise.reject(new Error(data.msg || '请求处理失败'))
    }
    return data
  },
  error => {
    const status = error.response?.status
    const messageMap = {
      401: '会话过期，请重新登录',
      403: '无权访问该资源',
      404: '请求资源不存在',
      500: '服务器内部错误'
    }

    error.message = messageMap[status] || error.message
    return Promise.reject(error)
  }
)

export default service

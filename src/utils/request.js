import axios from 'axios'
import { getToken, removeToken, removeExpiresIn } from '@/utils/auth'
import cache from '@/plugins/cache.js'
import {useToast} from "@/composables/UseToast.js"
import { router } from '@/router'
import tradeWebSocket from '@/plugins/websocket'
const { successToast, errorToast } = useToast()

// 防止401重复跳转标志
let isRefreshing = false

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 600000,
  headers: { 'Content-Type': 'application/json;charset=utf-8','X-Client-Type': 'client' }
})



// 请求拦截器
service.interceptors.request.use(config => {

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
      errorToast('数据正在处理，请勿重复提交!')
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
      errorToast(data.msg || '请求处理失败')
    }

    // 对于成功响应中的401错误也进行处理
    if (data.code && data.code === 401 && !isRefreshing) {
      isRefreshing = true
      // 显示错误提示
      errorToast('登录状态已过期，请重新登录')
      // 断开WebSocket连接
      tradeWebSocket.close()
      // 清除token、过期时间和所有缓存
      removeToken()
      removeExpiresIn()
      cache.session.clear()
      cache.local.clear()

      // 跳转到登录页面
      router.push({
        path: '/login'
      });
      // 重置刷新状态
      isRefreshing = false
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

import request from '@/utils/request'

// 登录方法
export function login(data) {
  return request({
    url: '/auth/client/login',
    headers: {
      isToken: false,
      repeatSubmit: false
    },
    method: 'post',
    data: {
      // 动态字段根据登录方式
      ...data,
      // 明确传递登录方式参数
      loginType: data.loginType, // 0-密码登录 1-手机验证码登录，2-邮箱验证码登录
      userType: data.userType    // 01-经纪人 02-客户
    }
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/auth/client/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 刷新方法
export function refreshToken() {
  return request({
    url: '/auth/client/refresh',
    method: 'post'
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/auth/client/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/auth/client/logout',
    method: 'delete'
  })
}

// 获取验证码
export function sendCode(data) {
  return request({
    url: '/message/sendCode',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data,
    timeout: 20000
  })
}


// 获取验证码
export function getCodeImg() {
  return request({
    url: '/code',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}
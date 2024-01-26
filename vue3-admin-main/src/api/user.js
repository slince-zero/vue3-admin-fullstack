import service from '../utlis/request'

// 登录
export const login = async (data) => {
  return service({
    url: '/auth',
    method: 'post',
    data,
  })
}

// 退出登录
export const logout = () => {
  return service({
    url: '/auth/logout',
    method: 'get',
  })
}

// 注册用户
export const register = (params) => {
  return service({
    url: '/auth/register',
    method: 'post',
    data: params,
  })
}

// 获取验证码
export const getCaptcha = () => {
  return service({
    url: '/auth/captcha',
    method: 'get',
  })
}

// 获取当前用户信息
export const getCurrentUserInfo = () => {
  return service({
    url: '/user/current',
    method: 'get',
  })
}

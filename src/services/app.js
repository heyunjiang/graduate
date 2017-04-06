import { request } from '../utils'
import config from '../utils/config'

export async function login (params) {
  return request({
    url: config.server+'Index/login',
    // url: '/api/login',
    method: 'post',
    data: params,
  })
}

export async function logout (params) {
  return request({
    url: '/index/logout',
    method: 'post',
    data: params,
  })
}

export async function userInfo (params) {
  return request({
    url: '/index/userInfo',
    method: 'get',
    data: params,
  })
}

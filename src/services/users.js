import { request } from '../utils'
import config from '../utils/config'

export async function query (params) {
  return request({
    url: config.server+'Index/users',
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: config.server+'Index/users',
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: config.server+'Index/users',
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: config.server+'Index/users',
    method: 'put',
    data: params,
  })
}

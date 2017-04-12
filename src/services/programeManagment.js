import { request } from '../utils'
import config from '../utils/config'

export async function query (params) {
  return request({
    url: config.server+'Index/programeManagment',
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: config.server+'Index/programeManagment',
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: config.server+'Index/programeManagment',
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: config.server+'Index/programeManagment',
    method: 'put',
    data: params,
  })
}

import './index'
import { get, post,remove,update } from './index'
// 获取商户列表
export function getMerchanlist(merchanname){
  return get('/merchanlist',{merchanname})
}
export function modifyMerchan(id, data){
  return update('/merchanlist',id, data)
}
// 添加商户 /merchanlist
export function addMerchan(params){
  return post('/merchanlist',params)
}
// 删除商户
export function delMerchan(id){
  return remove('/merchanlist',id)
}
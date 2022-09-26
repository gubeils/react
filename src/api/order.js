import './index'
import { get, post,remove,update } from './index'
// 获取商户列表
export function getOrderlist(id){
  return get('/orderlist',{id})
}
export function modifyOrder(id, data){
  return update('/orderlist',id, data)
}
// 添加商户 /merchanlist
export function addOrder(params){
  return post('/orderlist',params)
}
// 删除商户
export function delOrder(id){
  return remove('/orderlist',id)
}
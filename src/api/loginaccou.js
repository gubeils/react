import './index'
import { get, post,remove,update } from './index'
// 获取商户列表
export function getLoginaccou(name){
  return get('/Loginaccou',{name})
}
export function modifyLoginaccou(id, data){
  return update('/Loginaccou',id, data)
}
// 添加商户 /merchanlist
export function addLoginaccou(params){
  return post('/Loginaccou',params)
}
// 删除商户
export function delLoginaccou(id){
  return remove('/Loginaccou',id)
}
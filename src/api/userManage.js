import './index'
import { get } from './index'
// 获取用户登录信息接口
export function getUserList(username){
  return get('/userlist',{username})
}
import './index'
import { get,update ,remove,post} from './index'
// 获取用户登录信息接口
export function getUserList(username){
  return get('/userlist',{username})
}
// 修改用户信息接口
export function modifyUser(id, data) {
  // url, id, data
  return update('/userlist', id, data)
}
// 删除用户接口
export function delUser(id){
  return remove('/userlist', id)
}
// 添加用户接口
export function addUsers(params){
  return post('/userlist', params)
}
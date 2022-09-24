import { get, update,remove, post } from './index'

export function getMessageList(username) { // 获取列表请求
    return get('/commuinfo', {username})
}
export function putMessage(params) { // 修改通讯信息
    return update('/commuinfo', params.id, params)
}
export function delMessage(id){
    return remove('/commuinfo',id)
}
export function addMessage(params){
    return post('/commuinfo', params)
}
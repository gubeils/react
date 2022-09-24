import React, { useEffect, useState } from "react";
// 引入ant组件
import { Input, Button, message  } from "antd";
// 引入样式
import "./index.less";
// 引入请求
import { getMessageList,delMessage } from "../../api/message";
// 引入moment
// import moment from "moment";
// 首先布局
// 丰富逻辑 
// 导入每一项
// import columns from "../utils/config";
import MessageTable from "./components/messageTable";
// 引入修改通讯信息弹框
import EditMessageModal from "./components/editMessageModal";

// 引入添加通讯信息组件
import AddMessageModal from "./components/addMessageModa;";
// 引入修改用户弹窗组件
// import EditUser from "./components/editUser";
// import AddUser from "./components/addUser";
import AddOrEditMessage from "./components/addOrEditMessage";
const UserList = props => {
  const [dataSource, setDataSource] = useState([]); // 列表数据
  const [username, setUsername] = useState(""); //联系人
  
  const [loading, setLoading] = useState(false); //列表请求状态
  
  const [isVisible, setIsVisible] = useState(false); //修改通讯信息弹框状态
  const [cellData,setCellData]=useState(null)
  const [isAddVisible,setIsAddVisible]=useState(false) //添加通讯信息弹框状态

  // const [form] = Form.useForm();
  const [addOrEdit,setAddOrEdit]=useState(false) //true添加 false 修改
  // 初始化执行
  useEffect(() => {
    getList();
  }, []);

  // 方法
  // 请求用户列表数据
  function getList(username) {
    // setLoading(true); //表格加载状态 开
    getMessageList(username).then(data => {
      console.log(data);
      // data 就是后台返回的数据 需要给他赋值给 datasource

      setDataSource(data);
      setLoading(false); //表格加载状态 关
    });
  }
  function search() {
    console.log(username);
    // 搜索
    getList(username);
  }
  // 用户名改变
  function usernameChange(event) {
    setUsername(event.target.value);
  }

  // // function handleCancel() {
  // //   setIsVisible(false);
  // // }
  
  // //修改按钮
  // function modify(record) {
  //   // 修改弹框展示事件
  //   setCellData(record);
  //   setIsVisible(true);
  //   console.log(record, isVisible);
  //   setAddOrEdit(false)
  //   setVisible(true)
  // }
  // // 删除按钮
  // function del(id) {
  //   delUser(id).then(data => {
  //     console.log(data);
  //     message.success("删除成功");
  //     getList();
  //   });
  // }
  // //添加用户取消方法
  // // function addCancel() {
  // //   setIsAddVisible(false);
  // // }
  // //添加用户按钮
  // function addUser() {
  //   setIsAddVisible(true);
  //   // from.resetFields()
  //   setAddOrEdit(true)
  //   setVisible(true)
  // }
  // // 添加 or 修改弹窗关闭方法
  // function cancel(){  
  //   setVisible(false)
  // }


  // 添加通讯信息
  
  
  function addMessage(){ //添加通讯信息
    setIsAddVisible(true)
    setAddOrEdit(true)
    // setVisible(true)
    setIsVisible(true)


  }

  // 修改通讯信息
  function modify(record){
    setCellData(record)
    setIsVisible(true)
    setAddOrEdit(false) //修改
    // setVisible(true)
  }

  // 删除通讯信息
  function del(id){
    // 弹出二次确认弹窗
    // 调接口
    delMessage(id).then(data=>{
      console.log(data)
      message.success('删除成功')
      getList()
    })
    // 提示删除成功
    // 刷新列表
  }
  // 关闭通讯信息弹框
  function handleCancel(){
    setIsVisible(false)

  }
  // 关闭添加通讯信息弹框
  function addCancel(){
    console.log(111)
    setIsAddVisible(false)
  }
  function cancel(){
    console.log(111)
    setIsVisible(false)

  }
  return (
    <div className="user-list">
      {/* 上下两行布局 */}
      {/* 搜索项 */}
      <div className="search">
        <Input
          value={username}
          placeholder="请输入用户名"
          onChange={usernameChange}
          onPressEnter={search}
        />
        <Button type="primary" onClick={search}>
          搜索
        </Button>
        <Button onClick={addMessage}>添加</Button>
      </div>
      <div className="table">
        <MessageTable
          loading={loading}
          dataSource={dataSource}
          modify={modify}
          del={del}
        />
      </div>
      {/* <EditMessageModal
        record={cellData}
        getList={getList}
        handleCancel={handleCancel}
        isVisible={isVisible}
      /> */}
      {/* <AddMessageModal isVisible={isAddVisible} handleCancel={addCancel} getList={getList}/> */}
      <AddOrEditMessage getList={getList} isVisible={isVisible} handleCancel={cancel} record={cellData} addOrEdit={addOrEdit} username={username}/>
      {/* <AddOrEditUser addOrEdit={addOrEdit} username={username} visible={visible} record={cellData} cancel={cancel} getList={getList}/> */}
    </div>
  );
};

export default UserList;

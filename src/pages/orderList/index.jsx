import React,{useEffect,useState} from "react";
import { getOrderlist,delOrder } from "../../api/order";
import { Input, Button, message } from "antd";

import UserTable from "./components/userTable";
import AddOrEditUser from "./components/addOrEditUser";
const OrderList=(props)=>{
  const [dataSource, setDataSource] = useState([]); // 声明dataSource
  const [id, setId] = useState("");
  const [isVisible, setIsVisible] = useState(false); //修改弹窗显示状态
  const [isAddVisible, setIsAddVisible] = useState(false); //添加弹窗显示状态
  const [cellData, setCellData] = useState(""); //修改行数据
  const [loading, setLoading] = useState(false);
  const [addOrEdit, setAddOrEdit] = useState(false); // true为添加事件 false为修改事件
  const [visible, setVisible] = useState(false); // 添加 or 修改弹窗显示状态
  useEffect(() => {
    getList();
  }, []);

  function getList(id) {
    setLoading(true); //表格加载状态 开
    getOrderlist(id).then(data => {
      console.log(data);
      // data 就是后台返回的数据 需要给他赋值给 datasource

      setDataSource(data);
      setLoading(false); //表格加载状态 关
    });
  }
  function search() {
    // 搜索
    getList(id);
  }
  // 用户名改变
  function usernameChange(event) {
    setId(event.target.value);
  }

  // function handleCancel() {
  //   setIsVisible(false);
  // }

  //修改按钮
  function modify(record) {
    // 修改弹框展示事件
    setCellData(record);
    setIsVisible(true);
    console.log(record, isVisible);
    setAddOrEdit(false);
    setVisible(true);
  }
  // 删除按钮
  function del(id) {
    delOrder(id).then(data => {
      console.log(data);
      message.success("删除成功");
      getList();
    }).catch(err=>{
      console.log(err);
      message.error('删除失败')
    })
  }
  //添加用户取消方法
  // function addCancel() {
  //   setIsAddVisible(false);
  // }
  //添加用户按钮
  function addUser() {
    setIsAddVisible(true);
    // from.resetFields()
    setAddOrEdit(true);
    setVisible(true);
  }
  // 添加 or 修改弹窗关闭方法
  function cancel() {
    setVisible(false);
  }
  return (
    <div className="user-list">
    {/* 上下两行布局 */}
    {/* 搜索项 */}
    <div className="search">
      <Input
        value={id}
        placeholder="请输入用户名"
        onChange={usernameChange}
        onPressEnter={search}
      />
      <Button type="primary" onClick={search}>
        搜索
      </Button>
      <Button onClick={addUser}>添加</Button>
    </div>
    <div className="table">
      <UserTable
        loading={loading}
        dataSource={dataSource}
        modify={modify}
        del={del}
      />
    </div>
    {/* <EditUser
      record={cellData}
      getList={getList}
      handleCancel={handleCancel}
      isVisible={isVisible}
    /> */}
    {/* <AddUser isAddVisible={isAddVisible} addCancel={addCancel} getList={getList}/> */}
     <AddOrEditUser
      addOrEdit={addOrEdit}
      id={id}
      visible={visible}
      record={cellData}
      cancel={cancel}
      getList={getList}
    /> 
  </div>
  )
}
export default OrderList
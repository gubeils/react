import React, { useEffect, useState } from "react";
// 引入ant组件
import { Input, Button, message, Modal, Form, DatePicker } from "antd";
// 引入样式
import "./index.less";
// 引入请求
import { getUserList, delUser, addUsers } from "../../api/userManage";
// 引入moment
import moment from "moment";
// 首先布局
// 丰富逻辑
// 导入每一项
// import columns from "../utils/config";
import UserTable from "./components/userTable";
// 引入修改用户弹窗组件
import EditUser from "./components/editUser";

const UserList = props => {
  const [dataSource, setDataSource] = useState([]); // 声明dataSource
  const [username, setUsername] = useState("");
  const [isVisible, setIsVisible] = useState(false); //修改弹窗显示状态
  const [isAddVisible, setIsAddVisible] = useState(false); //添加弹窗显示状态

  const [cellData, setCellData] = useState(""); //修改行数据
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // 初始化执行
  useEffect(() => {
    getList();
  }, []);

  // 方法
  // 请求用户列表数据
  function getList(username) {
    setLoading(true); //表格加载状态 开
    getUserList(username).then(data => {
      console.log(data);
      // data 就是后台返回的数据 需要给他赋值给 datasource

      setDataSource(data);
      setLoading(false); //表格加载状态 关
    });
  }
  function search() {
    // 搜索
    getList(username);
  }
  // 用户名改变
  function usernameChange(event) {
    setUsername(event.target.value);
  }

  function handleCancel() {
    setIsVisible(false);
  }
  function onReset() {
    form.resetFields();
  }
  //修改按钮
  function modify(record) {
    // 修改弹框展示事件
    setCellData(record);
    setIsVisible(true);
    console.log(record, isVisible);
  }
  // 删除按钮
  function del(id) {
    delUser(id).then(data => {
      console.log(data);
      message.success("删除成功");
      getList();
    });
  }
  //添加用户取消方法
  function addCancel() {
    setIsAddVisible(false);
  }
  //添加用户按钮
  function addUser() {
    setIsAddVisible(true);
  }
  // 添加用户成功表单验证方法
  function onFinish(values) {
    console.log(values);
    // 将填写的时间格式化传给后端
    const params={
      ...values,
      regist_time:moment(values.regist_time).format('YYYY-MM-DD'),
      key:values.id 
    }
    addUsers(params).then(data => {
      console.log(data);
      setIsAddVisible(false);
      getList()
    });
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
      <EditUser
        record={cellData}
        getList={getList}
        handleCancel={handleCancel}
        isVisible={isVisible}
      />
      <Modal
        title="添加用户"
        visible={isAddVisible}
        footer={null}
        onCancel={addCancel}
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 12 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="序号"
            name="id"
            rules={[
              {
                required: true,
                message: "请输入序号!",
              },
            ]}
          >
            <Input placeholder="请输入序号" />
          </Form.Item>
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
            rules={[
              {
                required: true,
                message: "请输入性别!",
              },
            ]}
          >
            <Input placeholder="请输入性别" />
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age"
            rules={[
              {
                required: true,
                message: "请输入年龄!",
              },
            ]}
          >
            <Input placeholder="请输入年龄" />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="tel"
            rules={[
              {
                required: true,
                message: "请输入手机号!",
              },
            ]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            label="注册日期"
            name="regist_time"
            rules={[
              {
                required: true,
                message: "请输入日期!",
              },
            ]}
          >
            <DatePicker fromat="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            label="登录次数"
            name="ligin_count"
            rules={[
              {
                required: true,
                message: "请输入登录次数!",
              },
            ]}
          >
            <Input placeholder="请输入登录次数" />
          </Form.Item>
          <Form.Item
            label="积分"
            name="code"
            rules={[
              {
                required: true,
                message: "请输入积分!",
              },
            ]}
          >
            <Input placeholder="请输入积分" />
          </Form.Item>
          <Form.Item
            label="IP地址"
            name="ip_adress"
            rules={[
              {
                required: true,
                message: "请输入IP地址!",
              },
            ]}
          >
            <Input placeholder="请输入IP地址" />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ margin: "0px 20px" }}
              type="primary"
              htmlType="submit"
            >
              提交
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserList;

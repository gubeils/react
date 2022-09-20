import React, { useState } from "react";
import { Form, Input, Button, Menu } from "antd";
import "./index.css";
import { loginAdmin } from "../../api/login";
const Login = porps => {
  // state 声明
  const [selectdKey, setSelectdKey] = useState(["mail"]);

  function changeSelectdKey(params) {
    //改变菜单项的默认值
    console.log("params:", params);
    setSelectdKey([params.key]);
  }
  // function login() {
  //   //登录
  // }
  function onFinish(values) {
    //请求成功回调
   
    console.log(values, "onFinsh");
    const params={
      username:values.phone,
      userpass:values.password
    }
    loginAdmin(params).then(data=>{
      console.log(data);
    })
  }
  function onFinishFailed(values) {
    //请求失败回调
    // console.log(object);
    console.log(values, "onFinishFailed");
  }

  return (
    <div className="login">
      <div className="logincont">
        <Menu
          className="login-menu"
          mode="horizontal"
          onClick={params => changeSelectdKey("phone", params)}
          selectedKeys={selectdKey}
          defaultSelectedKeys={["mail"]}
        >
          <Menu.Item key="mail">邮箱</Menu.Item>
          <Menu.Item key="phone">手机号</Menu.Item>
        </Menu>
        <Form
          className="login-form"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="login-title">
            <h2>手机号登陆</h2>
          </div>
          {/* 手机号 */}
          <Form.Item
            label="手机号"
            name="phone"
            rules={[
              {
                required: true,
                message: "请输入手机号",
              },
            ]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
       

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            登录
          </Button>
        </Form.Item>
        </Form>
        {/* <div className="login-btn">
          <Button type="primary" onClick={login}>
            登录
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Login;

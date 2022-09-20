import React, { useState } from "react";
import { Form, Input, Button, Menu } from "antd";
import "./index.css";
const Login = porps => {
  // state 声明
  const [selectdKey, setSelectdKey] = useState(["mail"]);

  function changeSelectdKey(params) {
    //改变菜单项的默认值
    console.log("params:", params);
    setSelectdKey([params.key]);
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
        >
          <div className="login-title">
            <h2>手机号登陆</h2>
          </div>
          {/* 手机号 */}
          <Form.Item label="手机号">
            <Input placeholder="请输入手机号" />
          </Form.Item>
          
          <Form.Item label="密码">
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

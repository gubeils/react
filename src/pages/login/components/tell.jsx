import React from "react";
import { Form, Input, Button, message } from "antd";
import { loginAdmin } from "../../../api/login";
import { useHistory } from "react-router-dom";
const Tell = props => {
  const history = useHistory();
  //请求成功回调
  function onFinish(values) {
    console.log(values, "onFinsh");
    const params = {
      username: values.phone,
      userpass: values.password,
    };
    loginAdmin(params)
      .then(data => {
        console.log(data);
        // 保存token
        localStorage.setItem("token", data.token);
        localStorage.setItem('username',data.username) //保存用户名
        // 登陆成功跳转
        message.success("登陆成功");
        history.push("/layout");
      })
      .catch(err => {
        message.error("登陆失败");
      });
  }
  // 请求失败
  function onFinishFailed(values) {
    //请求失败回调
    // console.log(object);
    console.log(values, "onFinishFailed");
  }
  return (
    <Form
      className="login-form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="login-title">
        <h2>用户名登陆</h2>
      </div>
      {/* 手机号 */}
      <Form.Item
        label="账号"
        name="phone"
        rules={[
          {
            required: true,
            message: "请输入账号",
          },
        ]}
      >
        <Input placeholder="请输入账号" />
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
  );
};
export default Tell;

import React from "react";
import { Form, Input, Button, message } from "antd";
import { loginAdmin } from "../../../api/login";
import { useHistory } from "react-router-dom";
const Mail = props => {
  const history = useHistory();

  function emailFinish(values) {
    console.log(values, "emailFinish");
    const params = {
      email: values.email,
      userpass: values.password,
    };
    loginAdmin(params)
      .then(data => {
        console.log(data);

        // 保存token
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.email); //保存用户名
        // 登陆成功跳转
        message.success("登陆成功");
        history.push("/layout");
      })
      .catch(err => {
        message.error("登陆失败");
      });
  }
  return (
    <Form
      className="login-form"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      onFinish={emailFinish}
    >
      <div className="login-title">
        <h2>邮箱登陆</h2>
      </div>
      {/* 手机号 */}
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          {
            required: true,
            message: "请输入邮箱",
          },
        ]}
      >
        <Input placeholder="请输入邮箱" />
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
export default Mail;

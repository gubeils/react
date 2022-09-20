import React, { useState } from "react";
import "./index.css";
import { Menu } from "antd";

import Tell from "./components/tell";
import Mail from "./components/mail";
// import { loginAdmin } from "../../api/login";
// import { useHistory } from "react-router-dom";
const Login = porps => {
  // state 声明
  const [selectdKey, setSelectdKey] = useState(["phone"]);
  // 声明路由
  // const history = useHistory();
  function changeSelectedKey(params) {
    //改变菜单项的默认值
    console.log("params:", params);
    setSelectdKey([params.key]);
  }

  return (
    <div className="login">
      <div className="logincont">
        <Menu
          mode="horizontal"
          className="login-menu"
          onClick={changeSelectedKey}
          selectedKeys={selectdKey}
          defaultSelectedKeys={["phone"]}
          
        >
          <Menu.Item key="phone">账号</Menu.Item>
          <Menu.Item key="mail">邮箱</Menu.Item>
        </Menu>

        {selectdKey.indexOf("phone") !== -1 ? (
          // {/* 手机号登陆 */}
          <Tell />
        ) : (
          // {/* 邮箱登陆 */}
          <Mail />
        )}
      </div>
    </div>
  );
};

export default Login;

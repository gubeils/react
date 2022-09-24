import React, { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import NameDropDown from "./nameDropDown";
const MyHeader = props => {
  const messageCount = 200;
  const username = localStorage.getItem("username");
  const [nameDropDown, setNameDropDown] = useState(false);
  function nameClick() {
    setNameDropDown(!nameDropDown);
  }
  return (
    <div className="header">
      <div className="title">点餐后台管理系统</div>
      <div className="message">
        <span className="name">消息</span>
        <span className="count">{messageCount}</span>
      </div>
      <div className="username">
        <span className="lanuage">欢迎您:</span>
        <div className="name">
          <div onClick={nameClick}>
            {username}
            {nameDropDown ? <UpOutlined /> : <DownOutlined />}{" "}
          </div>
          {nameDropDown ? <NameDropDown /> : null}
        </div>
      </div>
    </div>
  );
};
export default MyHeader;

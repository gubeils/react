import React,{useState} from "react";
import "./index.css";
import { Dropdown, Menu } from "antd";
const Layout = props => {
  const messageCount = 0;
  const username = localStorage.getItem("username");
  const [nameDropDown,setNameDropDown]=useState(false)
  const loginCount=100 //登录次数
  const orderCount=200 //下单次数
  const good=300 //好评
  const integral=300 //积分
  const safe='最高权限' //安全等级
  function nameClick(){
    setNameDropDown(!nameDropDown)
  }
  return (
    <div className="layout">
      {/* 顶部区域 */}
      <div className="header">
        <div className="title">点餐管理系统</div>
        <div className="message">
          <span className="name">消息</span>
          <span className="count">{messageCount}</span>
        </div>
        <div className="username">
          <span className="lanuage">欢迎您:</span>
          <div className="name">
            <div onClick={nameClick}>{username}</div>
            {nameDropDown?(<div className="dorpdown">
              <div className="dropdown-top"><span>我的账户</span><span>退出登录</span></div>
              <div className="dropdown-item"><span>登录</span><span>{loginCount}次</span></div>
              <div className="dropdown-item"><span>下单</span><span>{orderCount}次</span></div>
              <div className="dropdown-item"><span>好评</span><span>{good}个</span></div>
              <div className="dropdown-item"><span>积分</span><span>{integral}分</span></div>
              <div className="dropdown-item"><span>安全等级:</span><span>{safe}</span></div>




            </div>):null}
            
          </div>
        </div>
      </div>
      <div className="layout-main">
        {/* 左侧菜单 */}
        <div className="sidebar">左侧菜单</div>
        {/* 右侧视图区域 */}
        <div className="main">右侧视图区域</div>
      </div>
    </div>
  );
};
export default Layout;

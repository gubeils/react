import React from "react";
import { useHistory } from "react-router-dom";

const NameDropDown = props => {
  const history=useHistory()
  const loginCount = 100; //登录次数
  const orderCount = 200; //下单次数
  const good = 300; //好评
  const integral = 300; //积分
  const safe = "最高权限"; //安全等级
  function logout(){ //退出
    // 跳转到登录页
    history.push('/login')
    // 去除local信息
    localStorage.clear()
  }
  return (
    <div className="dorpdown">
      <div className="dropdown-top">
        <span>我的账户</span>
        <span onClick={logout}>退出登录</span>
      </div>
      <div className="dropdown-item">
        <span>登录</span>
        <span>{loginCount}次</span>
      </div>
      <div className="dropdown-item">
        <span>下单</span>
        <span>{orderCount}次</span>
      </div>
      <div className="dropdown-item">
        <span>好评</span>
        <span>{good}个</span>
      </div>
      <div className="dropdown-item">
        <span>积分</span>
        <span>{integral}分</span>
      </div>
      <div className="dropdown-item">
        <span>安全等级:</span>
        <span>{safe}</span>
      </div>
    </div>
  );
};
export default NameDropDown
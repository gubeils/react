import React from "react";
import MyHeader from "./components/myHeader";
import { Redirect, Route, Switch } from "react-router-dom";

import LayoutMenu from "./components/menu";
import UserList from "../userList";
import Message from "../message";
import Analysis from "../analysis";
import BusinessList from "../businessList";
import Account from "../account";
import BusinessAnalysis from "../businessAnalysis";
import "./index.less";

const Layout = props => {
  return (
    <div className="layout">
      {/* 顶部区域 */}
      <MyHeader />
      <div className="layout-main">
        {/* 左侧菜单 */}
        <div className="sidebar">
          <LayoutMenu />
        </div>
        {/* 右侧视图区域 */}
        <div className="main">
          <Switch>
            {/* 重定向 */}
            <Redirect exact={true} to="/layout/userlist" from="/layout"></Redirect>
            {/* 用户列表 */}
            <Route path="/layout/userlist" component={UserList}></Route>
            {/* 通讯信息 */}
            <Route path="/layout/message" component={Message}></Route>
            {/* 统计分析 */}
            <Route path="/layout/analysis" component={Analysis}></Route>
            {/* 商户列表 */}
            <Route path="/layout/businessList" component={BusinessList}></Route>
            {/* 登陆账户 */}
            <Route path="/layout/Account" component={Account}></Route>
            {/* 商户分析 */}
            <Route path="/layout/BusinessAnalysis" component={BusinessAnalysis}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default Layout;

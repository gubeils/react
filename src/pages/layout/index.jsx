import React from "react";
import MyHeader from "./components/myHeader";

import "./index.css";

const Layout = props => {


  return (
    <div className="layout">
      {/* 顶部区域 */}
      <MyHeader/>
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

import React, { useState } from "react";
import  { Menu, Switch } from "antd";
import { useHistory} from "react-router-dom";
import { menuList } from "../utils/config";


const { SubMenu } = Menu;

const LayoutMenu = () => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");
  // 路由声明
  const history = useHistory();

  // 改变菜单类型
  const changeMode = value => {
    setMode(value ? "vertical" : "inline");
  };
  // 改变主题
  const changeTheme = value => {
    setTheme(value ? "dark" : "light");
  };
  // 生成菜单子项的方法
  const menuGenerate = () => {
    return menuList.map(item => {
      // return item.children ? (
      //   <SubMenu key={item.key} title={item.title}>
      //     {item.children.map(menu => {
      //       return <Menu.Item key={menu.key}>{menu.title}</Menu.Item>;
      //     })}
      //   </SubMenu>
      // ) : (
      //   <Menu.Item key={item.key}>{item.title}</Menu.Item>
      // )
      return twoMenuGenerate(item);
    });
  };

  // 生成二级菜单的方法
  const twoMenuGenerate = params => {
    return params.children ? (
      <SubMenu key={params.key} title={params.title}>
        {params.children.map(menu => {
          // 递归调用自己
          return twoMenuGenerate(menu);
        })}
      </SubMenu>
    ) : (
      <Menu.Item
       style={{marginLeft:'-2px',width:'174px'}} onClick={() => menuClick(params)} icon={params.icon} key={params.key}>
        {params.title}
      </Menu.Item>
    );
  };
  const menuClick = params => {
    console.log(params);
    history.push(params.path);
  };
  return (
    <div>
      <div className="box">
        <Switch onChange={changeMode} />
        改变菜单展示
        <span className="ant-divider" style={{ margin: "0 1em" }} />
        <Switch onChange={changeTheme} />
        改变主题
      </div>
      <br />
      <br />
      <Menu
        style={{ width: 168 }}
        defaultSelectedKeys={["userList"]}
        defaultOpenKeys={["userManage"]}
        mode={mode}
        theme={theme}
      >
        {menuGenerate()}
      </Menu>
    </div>
  );
};
export default LayoutMenu;

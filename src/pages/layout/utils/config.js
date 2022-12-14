import React from "react";
import { PieChartOutlined, AreaChartOutlined ,MenuOutlined,MessageOutlined,BarChartOutlined,UserOutlined} from "@ant-design/icons"
export const menuList = [
  {
    key: "userMange",
    title: "用户管理",
    icon: 'areaChartOutlined',
    
    children: [
      {
        key: "userList",
        title: "用户列表",
        path: "/layout/userList",
    icon: <MenuOutlined />,

      },
      {
        key: "message",
        title: "通讯信息",
        path: "/layout/message",
        icon:<MessageOutlined />
      },
      {
        key: "analysis",
        title: "统计分析",
        path: "/layout/analysis",
        icon:<BarChartOutlined />
      },
    ],
  },
  {
    key: "businessMange",
    title: "商户管理",

    children: [
      { key: "businessList", title: "商户列表",path: "/layout/businessList" ,icon: <MenuOutlined />},
      { key: "account", title: "登录账户" ,path: "/layout/account",icon:<UserOutlined />},
      { key: "businessAnalysis", title: "商户分析",path: "/layout/businessAnalysis",icon:<PieChartOutlined /> },
    ],
  },
  {
    key: "orderMange",
    title: "订单管理",
    children: [
      { key: "orderList", title: "订单列表",path: "/layout/orderList" ,icon: <MenuOutlined />,},
      { key: "orderAnalysis", title: "订单分析",path: "/layout/orderAnalysis",icon:<AreaChartOutlined /> },
    ],
  },
  // { key: "payments", title: "收支管理" },
  // { key: "platform", title: "平台管理" },
  // {
  //   key: "safe",
  //   title: "安全管理",
  //   children: [
  //     {
  //       key: "1",
  //       title: "test1",
  //       children: [
  //         {
  //           key: "1-2",
  //           title: "test1-2",
  //           children: [
  //             { key: "1-2-1", title: "test2" },
  //             { key: "1-2-2", title: "test3" },
  //           ],
  //         },
  //         { key: "1-3", title: "test1-3" },
  //       ],
  //     },
  //     { key: "2", title: "test2" },
  //     { key: "3", title: "test3" },
  //   ],
  // },
];

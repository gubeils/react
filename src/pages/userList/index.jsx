import React, { useEffect,useState } from "react";
import { Input, Button, Table } from "antd";
import './index.less'
import { getUserList } from "../../api/userManage";
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
    align: "center",
  },
  {
    title: "性别",
    dataIndex: "sex",
    key: "sex",
    align: "center",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    align: "center",
  },
  {
    title: "手机号",
    dataIndex: "tel",
    key: "tel",
    align: "center",
  },
  {
    title: "注册时间",
    dataIndex: "regist_time",
    key: "regist_time",
    align: "center",
  },
  {
    title: "登录次数",
    dataIndex: "ligin_count",
    key: "ligin_count",
    align: "center",
  },
  {
    title: "积分",
    dataIndex: "code",
    key: "code",
    align: "center",
  },
  {
    title: "IP地址",
    dataIndex: "ip_adress",
    key: "ip_adress",
    align: "center",
  },
  {
    title: "操作",
    key: "ctrl",
    align: "center",
  },
];

const UserList = props => {
  const [dataSource,setDataSource]=useState('')

  // 初始化执行
  useEffect(() => {
    getList();
  }, []);

  // 请求用户列表数据
  function getList(username) {
    getUserList(username).then(data => {
      console.log(data);
      setDataSource(data)
    });
  }

  return (
    <div className="user-list">
      <div className="search">
        <Input placeholder="请输入用户名" />
        <Button type="primary">搜索</Button>
        <Button>添加</Button>
      </div>
      <div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
};

export default UserList;

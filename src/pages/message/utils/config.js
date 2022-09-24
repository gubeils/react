import { Divider, Button, Popconfirm, Tag } from "antd";
// 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址
export const columns = (isShow, del) => [
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "联系人",
    dataIndex: "username",
    key: "username",
    align: "center",
  },
  {
    title: "联系电话",
    dataIndex: "tel",
    key: "tel",
    align: "center",
  },
  {
    title: "状态",
    dataIndex: "states",
    key: "states",
    align: "center",
    render: (cell, record) => {
      return (
        <>
          {cell === "已审核" ? (
            <Tag color="green">已审核</Tag>
          ) : cell === "待审核" ? (
            <Tag color="orange">待审核</Tag>
          ) : (
            <Tag color="red">未审核</Tag>
          )}
        </>
      );
    },
  },
  {
    title: "省市区",
    dataIndex: "local",
    key: "local",
    align: "center",
    // ellipsis: true,
    // width:90
  },
  {
    title: "街道地址",
    dataIndex: "adress",
    key: "adress",
    align: "center",
  },
  {
    title: "邮编",
    dataIndex: "mailcode",
    key: "mailcode",
    align: "center",
  },
  {
    title: "QQ号",
    dataIndex: "qqcode",
    key: "qqcode",
    align: "center",
  },
  {
    title: "邮箱",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "操作",
    key: "ctrl",
    align: "center",
    render: (text, record) => (
      <>
        <Button onClick={() => isShow(record)}>修改</Button>
        <Divider type="vertical" />

        <Popconfirm
          title="确认删除吗?"
          onConfirm={() => del(record.id)}
          okText="确认"
          cancelText="取消"
        >
          <Button type="primary">删除</Button>
        </Popconfirm>
      </>
    ),
  },
];

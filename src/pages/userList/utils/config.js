import {Divider,Button,Popconfirm, Tag} from 'antd'
// 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址
export const columns = (isShow, del) => [
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
    render: (cell, record) => {
      return (
        <>
          {cell === "男" ? (
            <Tag color="green">男</Tag>
          ) : <Tag color='pink'>女</Tag> 
          }
        </>
      );
    },
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
        <Button type="primary">
          删除
        </Button>
     
      </Popconfirm>
       
      </>
    ),
  },
];

import {Divider,Button,Popconfirm, Tag} from 'antd'
// 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址
export const columns = (isShow, del) => [
  // "id": "001",
  // "name": "北京烤鸭",
  // "accouname": "dsfgsa",
  // "tel": 13289763483,
  // "email": "1243983@qq.com",
  // "registime": "2021-07-19",
  // "root": "管理员",
  // "roottype": "所有权限",
  // "state": "启用",
  // "username": "张三",
  // "workcode": "0981",
  // "department": "行政部",
  // "position": "经理",
  // "logincount": "23",
  // "order": "240",
  // "safelevel": "中级"
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center",
    width:60
  },
  {
    title: "商户名称",
    dataIndex: "name",
    key: "name",
    align: "center",
    ellipsis: true,
    width:90

  },
  // {
  //   title: "账户名",
  //   dataIndex: "accouname",
  //   key: "accouname",
  //   align: "center",
  //   ellipsis: true,
  //   // width:60
  //   // render: (cell, record) => {
  //   //   return (
  //   //     <>
  //   //       {cell === "男" ? (
  //   //         <Tag color="green">男</Tag>
  //   //       ) : <Tag color='pink'>女</Tag> 
  //   //       }
  //   //     </>
  //   //   );
  //   // },
  // },
  {
    title: "手机号",
    dataIndex: "tel",
    key: "tel",
    align: "center",
    width:90,
    ellipsis: true,
  },
  // {
  //   title: "邮箱",
  //   dataIndex: "email",
  //   key: "email",
  //   align: "center",
  // },
  {
    title: "开通时间",
    dataIndex: "registime",
    key: "registime",
    align: "center",

    width:110,
  },
  {
    title: "类型",
    dataIndex: "root",
    key: "root",
    align: "center",
    width:80
  },
  {
    title: "权限",
    dataIndex: "roottype",
    key: "roottype",
    align: "center",
    width:60,
     render: (cell, record) => {
      return (
        <>
          {cell === "高级" ? (
            <Tag color="blue">高级</Tag>
          ) : (cell === "中级"?<Tag color='orange'>中级</Tag> :<Tag color='#C0C0C0'>初级</Tag> )
          }
        </>
      );
    },
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    align: "center",
    width:70,

  },
  {
    title: "姓名",
    dataIndex: "username",
    key: "username",
    align: "center",
    width:90,

  },
  {
    title: "工号",
    dataIndex: "workcode",
    key: "workcode",
    align: "center",
    width:70,

  },
  {
    title: "部门",
    dataIndex: "department",
    key: "department",
    align: "center",
    width:80,

  },
  {
    title: "职位",
    dataIndex: "position",
    key: "position",
    align: "center",
    width:80,
    // ellipsis: true,
    
  },
  {
    title: "登录次数",
    dataIndex: "logincount",
    key: "logincount",
    align: "center",
    width:90,

  }, 
  {
    title: "下单数",
    dataIndex: "order",
    key: "order",
    align: "center",
    width:80,

  },
  {
    title: "安全等级",
    dataIndex: "safelevel",
    key: "safelevel",
    align: "center",
    width:90,

  },
  {
    title: "操作",
    key: "ctrl",
    align: "center",
     ellipsis: true,
    width:180,
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

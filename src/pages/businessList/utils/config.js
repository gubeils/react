import {Divider,Button,Popconfirm} from 'antd'
// 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址
export const columns = (isShow, del) => [
  // "id": "001",
  //     "merchanname": "魏家凉皮",
  //     "type": "早餐类",
  //     "cost": "15",
  //     "commrating": "98",
  //     "local": "西安市火车站",
  //     "num": "2",
  //     "tranroute": "地铁3号线",
  //     "tel": "0915-3223454",
  //     "username": "陈老板",
  //     "key": 0
  {
    title: "商户ID",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "商户名称",
    dataIndex: "merchanname",
    key: "merchanname",
    align: "center",
  },
  {
    title: "经营品类",
    dataIndex: "type",
    key: "type",
    align: "center",
    // render: (cell, record) => {
    //   return (
    //     <>
    //       {cell === "男" ? (
    //         <Tag color="green">男</Tag>
    //       ) : <Tag color='pink'>女</Tag> 
    //       }
    //     </>
    //   );
    // },
  },
  {
    title: "人均消费",
    dataIndex: "cost",
    key: "cost",
    align: "center",
  },
  {
    title: "好评率",
    dataIndex: "commrating",
    key: "commrating",
    align: "center",
  },
  {
    title: "所在位置",
    dataIndex: "local",
    key: "local",
    align: "center",
  },
  {
    title: "地区排名",
    dataIndex: "num",
    key: "num",
    align: "center",
  },
  {
    title: "交通路线",
    dataIndex: "tranroute",
    key: "tranroute",
    align: "center",
  },
  {
    title: "门店电话",
    dataIndex: "tel",
    key: "tel",
    align: "center",
  },
  {
    title: "联系人",
    dataIndex: "username",
    key: "username",
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

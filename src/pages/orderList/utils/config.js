import { Divider, Button, Popconfirm, Tag } from "antd";
// 序号	用户名	性别	年龄	手机号	注册时间	登录次数	积分	IP地址
export const columns = (isShow, del) => [
  // "id": "001",
  //     "ordercode": "ewrwadw",
  //     "ordertime": "2021-09-12T15:22",
  //     "ordermoney": "999",
  //     "goodsname": "牛市",
  //     "goodscount": 898,
  //     "ordertype": "支付宝",
  //     "username": "小丽",
  //     "state": "已收货",
  //     "key": 0
  {
    title: "商户ID",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "订单编号",
    dataIndex: "ordercode",
    key: "ordercode",
    align: "center",
  },
  {
    title: "下单时间",
    dataIndex: "ordertime",
    key: "ordertime",
    align: "center",
  },
  {
    title: "订单金额",
    dataIndex: "ordermoney",
    key: "ordermoney",
    align: "center",
  },
  {
    title: "商品名称",
    dataIndex: "goodsname",
    key: "goodsname",
    align: "center",
  },
  {
    title: "数量",
    dataIndex: "goodscount",
    key: "goodscount",
    align: "center",
  },
  {
    title: "支付方式",
    dataIndex: "ordertype",
    key: "ordertype",
    align: "center",
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
    align: "center",
  },
  {
    title: "订单状态",
    dataIndex: "state",
    key: "state",
    align: "center",
    render: (cell, record) => {
      return (
        <>
          {cell === "待配送" ? (
            <Tag color="red">待配送</Tag>
          ) : cell === "配送中" ? (
            <Tag color="orange">配送中</Tag>
          ) : (
            <Tag color="green">已收货</Tag>
          )}
        </>
      );
    },
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

import React, { useEffect } from "react";
import { modifyOrder, addOrder } from "../../../api/order";

import { Input, Button, Modal, Form, message, Select, DatePicker } from "antd";
import moment from "moment";
const { Option } = Select;
const AddOrEditUser = props => {
  const [form] = Form.useForm();
  const { visible, cancel, getList, addOrEdit, record, id } = props;
  useEffect(() => {
    if (addOrEdit) {
      form.resetFields();
    } else {
      if (record) {
        const {
          id,
          ordercode,
          ordertime,
          ordermoney,
          goodsname,
          goodscount,
          ordertype,
          username,
          state,
        } = record;
        // console.log(moment(regist_time), regist_time);
        form.setFieldsValue({
          id,
          ordercode,
          ordertime: moment(ordertime),
          ordermoney,
          goodsname,
          goodscount,
          ordertype,
          username,
          state,
          key: id,
        });
      }
    }
  }, [form, visible, record, addOrEdit]);

  function onReset() {
    form.resetFields();
  }
  function onFinish(values) {
    const params = {
      ...values,
      ordertime: moment(values.ordertime).format("YYYY-MM-DD"),
      key: values.id,
    };
    if (addOrEdit) {
      console.log(values);
      // 将填写的时间格式化传给后端

      addOrder(params).then(data => {
        console.log(data);
        // setIsAddVisible(false);
        cancel();
        getList();
      });
    } else {
      console.log("Success:", values);

      modifyOrder(values.id, params)
        .then(data => {
          console.log(data, "modifyUser");
          message.success("修改成功");
          // setIsVisible(false);
          cancel();
          if (id) {
            getList(values.id);
          } else {
            getList();
          }
        })
        .catch(err => {
          console.log(err);
          message.error("修改失败");
        });
    }
  }
  return (
    <Modal
      title={addOrEdit ? "添加用户" : "修改用户"}
      visible={visible}
      footer={null}
      onCancel={cancel}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="商户ID"
          name="id"
          rules={[
            {
              required: true,
              message: "请输入商户ID!",
            },
          ]}
        >
          <Input disabled={!addOrEdit} placeholder="请输入商户ID" />
        </Form.Item>
        <Form.Item
          label="订单编号"
          name="ordercode"
          rules={[
            {
              required: true,
              message: "请输入订单编号",
            },
          ]}
        >
          <Input placeholder="请输入订单编号" />
        </Form.Item>
        <Form.Item
          label="下单时间"
          name="ordertime"
          rules={[
            {
              required: true,
              message: "请输入下单时间!",
            },
          ]}
        >
          <DatePicker fromat="YYYY-MM-DD" />

          {/* <Select placeholder="请选择性别">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select> */}
        </Form.Item>
        <Form.Item
          label="订单金额"
          name="ordermoney"
          rules={[
            {
              required: true,
              message: "请输入订单金额!",
            },
          ]}
        >
          <Input placeholder="请输入订单金额!" />
        </Form.Item>
        <Form.Item
          label="商品名称"
          name="goodsname"
          rules={[
            {
              required: true,
              message: "请输入商品名称!",
            },
          ]}
        >
          <Input placeholder="请输入商品名称!" />
        </Form.Item>
        <Form.Item
          label="数量"
          name="goodscount"
          rules={[
            {
              required: true,
              message: "请输入数量!",
            },
          ]}
        >
          <Input placeholder="请输入数量!" />
        </Form.Item>
        <Form.Item
          label="支付方式"
          name="ordertype"
          rules={[
            {
              required: true,
              message: "请输入支付方式!",
            },
          ]}
        >
          <Input placeholder="请输入支付方式!" />
        </Form.Item>
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          label="订单状态"
          name="state"
          rules={[
            {
              required: true,
              message: "请输入订单状态!",
            },
          ]}
        >
          <Select placeholder="请选择状态">
            <Option value="待配送">待配送</Option>
            <Option value="配送中">配送中</Option>
            <Option value="已收货">已收货</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            style={{ margin: "0px 20px" }}
            type="primary"
            htmlType="submit"
          >
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddOrEditUser;

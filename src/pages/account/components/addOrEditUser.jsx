import React, { useEffect } from "react";
import { modifyLoginaccou, addLoginaccou } from "../../../api/loginaccou";

import { Input, Button, Modal, Form, DatePicker, message,Select } from "antd";
import moment from "moment";
const {Option} = Select
const AddOrEditUser = props => {
  const [form] = Form.useForm();
  const { visible, cancel, getList, addOrEdit, record, name } = props;
  useEffect(() => {
    if (addOrEdit) {
      form.resetFields();
    } else {
      if (record) {
        // "id": "001", regist_time: moment(regist_time),
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
        const {
          id,
          name,
          accouname,
          tel,
          email,
          registime,
          root,
          roottype,
          state,
          username,
          workcode,
          department,
          position,
          logincount,
          order,
          safelevel,
    
        } = record;
        // console.log(moment(regist_time), regist_time);
        form.setFieldsValue({
          id,
          name,
          accouname,
          tel,
          email,
          registime: moment(registime),
          root,
          roottype,
          state,
          username,
          workcode,
          department,
          position,
          logincount,
          order,
          safelevel,
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
      registime: moment(values.registime).format("YYYY-MM-DD"),
      key: values.id,
    };
    if (addOrEdit) {
      console.log(values);
      // 将填写的时间格式化传给后端

      addLoginaccou(params).then(data => {
        console.log(data);
        // setIsAddVisible(false);
        cancel();
        getList();
      });
    } else {
      console.log("Success:", values);

      modifyLoginaccou(values.id, params)
        .then(data => {
          console.log(data, "modifyUser");
          message.success("修改成功");
          // setIsVisible(false);
          cancel();
          if (name) {
            getList(values.name);
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
          label="商户名称"
          name="name"
          rules={[
            {
              required: true,
              message: "请输入商户名称!",
            },
          ]}
        >
          <Input placeholder="请输入商户名称" />
        </Form.Item>
        {/* <Form.Item
          label="账户名"
          name="accouname"
          rules={[
            {
              required: true,
              message: "请输入账户名!",
            },
          ]}
        >
          <Input placeholder="请输入账户名" />
        </Form.Item> */}
        <Form.Item
          label="手机号"
          name="tel"
          rules={[
            {
              required: true,
              message: "请输入手机号!",
            },
          ]}
        >
          <Input placeholder="请输入手机号!" />
          
        </Form.Item>
        <Form.Item
          label="开通时间"
          name="registime"
          rules={[
            {
              required: true,
              message: "请输入开通时间!",
            },
          ]}
        >
          <DatePicker fromat="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          label="类型"
          name="root"
          rules={[
            {
              required: true,
              message: "请输入类型!",
            },
          ]}
        >
          <Input placeholder="请输入类型" />
        </Form.Item>
        <Form.Item
          label="权限级别"
          name="roottype"
          rules={[
            {
              required: true,
              message: "请输入权限级别!",
            },
          ]}
        >
          {/* <Input placeholder="请输入权限级别" /> */}
           <Select placeholder="请选择权限">
            <Option value="高级">高级</Option>
            <Option value="中级">中级</Option>
            <Option value="初级">初级</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="状态"
          name="state"
          rules={[
            {
              required: true,
              message: "请输入状态!",
            },
          ]}
        >
          <Input placeholder="请输入状态" />
        </Form.Item>
        <Form.Item
          label="姓名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入姓名!",
            },
          ]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          label="工号"
          name="workcode"
          rules={[
            {
              required: true,
              message: "请输入工号!",
            },
          ]}
        >
          <Input placeholder="请输入工号" />
        </Form.Item>
        <Form.Item
          label="部门"
          name="department"
          rules={[
            {
              required: true,
              message: "请输入部门!",
            },
          ]}
        >
          <Input placeholder="请输入部门" />
        </Form.Item>
        <Form.Item
          label="职位"
          name="position"
          rules={[
            {
              required: true,
              message: "请输入职位!",
            },
          ]}
        >
          <Input placeholder="请输入职位" />
        </Form.Item>
        <Form.Item
          label="登录次数"
          name="logincount"
          rules={[
            {
              required: true,
              message: "请输入登录次数!",
            },
          ]}
        >
          <Input placeholder="请输入登录次数" />
        </Form.Item>
        <Form.Item
          label="下单数"
          name="order"
          rules={[
            {
              required: true,
              message: "请输入下单数!",
            },
          ]}
        >
          <Input placeholder="请输入下单数" />
        </Form.Item>
        <Form.Item
          label="安全等级"
          name="safelevel"
          rules={[
            {
              required: true,
              message: "请输入安全等级!",
            },
          ]}
        >
          <Input placeholder="请输入安全等级" />
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

import React, { useEffect } from "react";
import { Input, Button, Modal, Form, DatePicker, message } from "antd";
import { modifyUser } from "../../../api/userManage";
import moment from "moment";

const EditUser = props => {
  const [form] = Form.useForm();

  const { getList, record, isVisible, handleCancel } = props;
  //取消按钮
  useEffect(() => {
    if (record) {
      const {
        id,
        username,
        sex,
        age,
        tel,
        regist_time,
        ligin_count,
        code,
        ip_adress,
      } = record;
      console.log(moment(regist_time), regist_time);
      form.setFieldsValue({
        id,
        username,
        sex,
        age,
        tel,
        regist_time: moment(regist_time),
        ligin_count,
        code,
        ip_adress,
        key: id,
      });
    }
  }, [record]);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onFinish(values) {
    console.log("Success:", values);
    const params = {
      ...values,
      regist_time: moment(values.regist_time).format("YYYY-MM-DD"),
      key: values.id,
    };

    modifyUser(values.id, params)
      .then(data => {
        console.log(data, "modifyUser");
        message.success("修改成功");
        // setIsVisible(false);
        handleCancel();
        getList();
      })
      .catch(err => {
        console.log(err);
        message.error("修改失败");
      });
  }

  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  function onReset() {
    form.resetFields();
  }
  return (
    <Modal
      cancelText="取消"
      okText="确认"
      title="修改用户"
      visible={isVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="序号"
          name="id"
          rules={[
            {
              required: true,
              message: "请输入序号!",
            },
          ]}
        >
          <Input placeholder="请输入序号" />
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
          label="性别"
          name="sex"
          rules={[
            {
              required: true,
              message: "请输入性别!",
            },
          ]}
        >
          <Input placeholder="请输入性别" />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[
            {
              required: true,
              message: "请输入年龄!",
            },
          ]}
        >
          <Input placeholder="请输入年龄" />
        </Form.Item>
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
          <Input placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item
          label="注册日期"
          name="regist_time"
          rules={[
            {
              required: true,
              message: "请输入日期!",
            },
          ]}
        >
          <DatePicker fromat="YYYY-MM-DD" onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="登录次数"
          name="ligin_count"
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
          label="积分"
          name="code"
          rules={[
            {
              required: true,
              message: "请输入积分!",
            },
          ]}
        >
          <Input placeholder="请输入积分" />
        </Form.Item>
        <Form.Item
          label="IP地址"
          name="ip_adress"
          rules={[
            {
              required: true,
              message: "请输入IP地址!",
            },
          ]}
        >
          <Input placeholder="请输入IP地址" />
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
export default EditUser;

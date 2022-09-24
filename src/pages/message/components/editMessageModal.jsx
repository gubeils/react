import React, { useEffect } from "react";
import { Input, Button, Modal, Form, message, Select } from "antd";
import { putMessage } from "../../../api/message";
import moment from "moment";
const { Option } = Select;
const EditMessageModal = props => {
  const [form] = Form.useForm();

  const { getList, record, isVisible, handleCancel } = props;
  //取消按钮
  useEffect(() => {
    if (record) {
      const {
        id,
        username,
        adress,
        email,
        local,
        qqcode,
        states,
        mailcode,
        tel,
      } = record;
      // console.log(moment(regist_time), regist_time);
      form.setFieldsValue({
        id,
        username,
        adress,
        email,
        local,
        qqcode,
        states,
        mailcode,
        tel,
        key: id,
      });
    }
  }, [record]);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onFinish(values) {
    // 校验成功事件
    console.log(values, "修改通讯信息");
    putMessage(values)
      .then(data => {
        console.log(data, "modifyuser");
        message.success("修改成功！");
        // 修改成功 则关闭弹框
        // setIsModalVisible(false);
        handleCancel();
        // 并且 重新请求列表
        getList();
      })
      .catch(err => {
        console.log(err);
        message.error("修改失败！");
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
      title="修改通讯信息"
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
          label="联系人"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入联系人!",
            },
          ]}
        >
          <Input placeholder="请输入联系人" />
        </Form.Item>
        <Form.Item
          label="联系电话"
          name="tel"
          rules={[
            {
              required: true,
              message: "请输入联系电话!",
            },
          ]}
        >
          <Input placeholder="请输入联系电话" />
        </Form.Item>
        <Form.Item
          label="街道地址"
          name="adress"
          rules={[
            {
              required: true,
              message: "请输入街道地址!",
            },
          ]}
        >
          <Input placeholder="请输入街道地址" />
        </Form.Item>
        <Form.Item
          label="邮编"
          name="email"
          rules={[
            {
              required: true,
              message: "请输入邮编!",
            },
          ]}
        >
          <Input placeholder="请输入邮编" />
        </Form.Item>
        <Form.Item
          label="省市区"
          name="local"
          rules={[
            {
              required: true,
              message: "请输入省市区!",
            },
          ]}
        >
          <Input placeholder="请输入省市区" />
        </Form.Item>
        <Form.Item
          label="QQ"
          name="qqcode"
          rules={[
            {
              required: true,
              message: "请输入QQ号码!",
            },
          ]}
        >
          <Input placeholder="请输入QQ号码" />
        </Form.Item>
        <Form.Item
          label="状态"
          name="states"
          rules={[
            {
              required: true,
              message: "请输入状态!",
            },
          ]}
        >
          <Select placeholder="请选择状态">
            <Option value="已审核">已审核</Option>
            <Option value="待审核">待审核</Option>
            <Option value="未审核">未审核</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="mailcode"
          rules={[
            {
              required: true,
              message: "请输入邮箱!",
            },
          ]}
        >
          <Input placeholder="请输入邮箱" />
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
export default EditMessageModal;

import React,{useEffect} from "react";
import { Input, Button,Modal, Form, DatePicker } from "antd";
import { addUsers } from "../../../api/userManage";
import moment from "moment";

const AddUser = props => {
  //添加弹窗显示状态
  const {isAddVisible,addCancel,getList}=props
  const [form] = Form.useForm();
  useEffect(()=>{
    form.resetFields()
  },[form,isAddVisible])

  
  function onReset() {
    form.resetFields();  
  }
  // 添加用户成功表单验证方法
  function onFinish(values) {
    console.log(values);
    // 将填写的时间格式化传给后端
    const params = {
      ...values,
      regist_time: moment(values.regist_time).format("YYYY-MM-DD"),
      key: values.id,
    };
    addUsers(params).then(data => {
      console.log(data);
      // setIsAddVisible(false);
      addCancel()
      getList();
    });
  }
  return (
    <Modal
      title="添加用户"
      visible={isAddVisible}
      footer={null}
      onCancel={addCancel}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
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
          <DatePicker fromat="YYYY-MM-DD" />
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
export default AddUser

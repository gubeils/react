import React, { useEffect } from "react";
import { addUsers, modifyUser } from "../../../api/userManage";
import { Input, Button, Modal, Form, DatePicker, message,Select } from "antd";
import moment from "moment";
const {Option} = Select
const AddOrEditUser = props => {
  const [form] = Form.useForm();
  const { visible, cancel, getList, addOrEdit, record, username } = props;
  useEffect(() => {
    if (addOrEdit) {
      form.resetFields();
    } else {
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
    }
  }, [form, visible, record, addOrEdit]);

  function onReset() {
    form.resetFields();
  }
  function onFinish(values) {
    const params = {
      ...values,
      regist_time: moment(values.regist_time).format("YYYY-MM-DD"),
      key: values.id,
    };
    if (addOrEdit) {
      console.log(values);
      // 将填写的时间格式化传给后端

      addUsers(params).then(data => {
        console.log(data);
        // setIsAddVisible(false);
        cancel();
        getList();
      });
    } else {
      console.log("Success:", values);

      modifyUser(values.id, params)
        .then(data => {
          console.log(data, "modifyUser");
          message.success("修改成功");
          // setIsVisible(false);
          cancel();
          if (username) {
            getList(values.username);
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
          label="序号"
          name="id"
          rules={[
            {
              required: true,
              message: "请输入序号!",
            },
          ]}
        >
          <Input disabled={!addOrEdit} placeholder="请输入序号" />
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
          <Select placeholder="请选择性别">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
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
export default AddOrEditUser;

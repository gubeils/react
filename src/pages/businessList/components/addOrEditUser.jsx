import React, { useEffect } from "react";
import { modifyMerchan, addMerchan } from "../../../api/merchanlist";

import { Input, Button, Modal, Form, DatePicker, message,Select } from "antd";
import moment from "moment";
const {Option} = Select
const AddOrEditUser = props => {
  const [form] = Form.useForm();
  const { visible, cancel, getList, addOrEdit, record, merchanname } = props;
  useEffect(() => {
    if (addOrEdit) {
      form.resetFields();
    } else {
      if (record) {
        const {
          id,
          merchanname,
          type,
          cost,
          commrating,
          local,
          num,
          tranroute,
          tel,
          username,
          key
        } = record;
        // console.log(moment(regist_time), regist_time);
        form.setFieldsValue({
          id,
          merchanname,
          type,
          cost,
          commrating,
          local,
          num,
          tranroute,
          tel,
          username,
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
      // regist_time: moment(values.regist_time).format("YYYY-MM-DD"),
      key: values.id,
    };
    if (addOrEdit) {
      console.log(values);
      // 将填写的时间格式化传给后端

      addMerchan(params).then(data => {
        console.log(data);
        // setIsAddVisible(false);
        cancel();
        getList();
      });
    } else {
      console.log("Success:", values);

      modifyMerchan(values.id, params)
        .then(data => {
          console.log(data, "modifyUser");
          message.success("修改成功");
          // setIsVisible(false);
          cancel();
          if (merchanname) {
            getList(values.merchanname);
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
          name="merchanname"
          rules={[
            {
              required: true,
              message: "请输入商户名称!",
            },
          ]}
        >
          <Input placeholder="请输入商户名称" />
        </Form.Item>
        <Form.Item
          label="经营品类"
          name="type"
          rules={[
            {
              required: true,
              message: "请输入经营品类!",
            },
          ]}
        >
          <Input placeholder="请输入经营品类" />

          {/* <Select placeholder="请选择性别">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select> */}
        </Form.Item>
        <Form.Item
          label="人均消费(元)"
          name="cost"
          rules={[
            {
              required: true,
              message: "人均消费(元)!",
            },
          ]}
        >
          <Input placeholder="人均消费(元)" />
          
        </Form.Item>
        <Form.Item
          label="好评率"
          name="commrating"
          rules={[
            {
              required: true,
              message: "请输入好评率!",
            },
          ]}
        >
          <Input placeholder="请输入好评率" />
        </Form.Item>
        <Form.Item
          label="所在位置"
          name="local"
          rules={[
            {
              required: true,
              message: "请输入所在位置!",
            },
          ]}
        >
          <Input placeholder="请输入所在位置" />
        </Form.Item>
        <Form.Item
          label="地区排名"
          name="num"
          rules={[
            {
              required: true,
              message: "请输入地区排名!",
            },
          ]}
        >
          <Input placeholder="请输入地区排名" />
        </Form.Item>
        <Form.Item
          label="交通路线"
          name="tranroute"
          rules={[
            {
              required: true,
              message: "请输入交通路线!",
            },
          ]}
        >
          <Input placeholder="请输入交通路线" />
        </Form.Item>
        <Form.Item
          label="门店电话"
          name="tel"
          rules={[
            {
              required: true,
              message: "请输入门店电话!",
            },
          ]}
        >
          <Input placeholder="请输入门店电话" />
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

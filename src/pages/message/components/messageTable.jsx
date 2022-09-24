import React from "react";
import { Table } from "antd";
// import { columns } from '../utils/config'
import { columns } from "../utils/config";
const MessageTable = props => {
  const { loading, dataSource, modify, del } = props;
  // columns 也可以做成函数将 函数参数传进去
  return (
    <Table
      rowKey="id"
      loading={loading}
      dataSource={dataSource}
      columns={columns(modify, del)}
    />
  );
};

export default MessageTable;

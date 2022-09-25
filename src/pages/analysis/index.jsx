import React, { useEffect, useState } from "react";
import { getUserList } from "../../api/userManage";

import "./index.less";
import Pie from "./components/pie";
import Bar from "./components/bar";

const Analysis = props => {
 
  const [data, setData] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  // 方法
  function getList() {
    getUserList().then(data => {
      console.log(data);
      setData(data);
    
    });
  }
  

  return (
    <div className="analysis">
      {/* 饼图 */}
      <Pie data={data} />

      <Bar data={data}/>
    </div>
  );
};
export default Analysis;

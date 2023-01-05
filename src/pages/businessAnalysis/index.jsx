import React, { useEffect, useState } from "react";
import { getMerchanlist } from "../../api/merchanlist";

import * as echarts from "echarts";
import "./index.less";
// import { Switch } from "react-router-dom";
// import Pie from "./components/pie";
// import Bar from "./components/bar";

const Analysis = props => {
  const [data, setData] = useState([]);

  let barData;

  // console.log('values',values);
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    barData = data.map(item => {
      return { value: item.cost * 1, name: item.merchanname };
    });
    // console.log(data)
    var myChart = echarts.init(document.getElementById("analysis-container"));

    let option = {
      title: {
        text: "人均消费统计",

        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "top",
      },
      series: [
        {
          type: "pie",
          radius: "50%",
          data: barData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    option && myChart.setOption(option);
  }, [data]);
  // 方法
  function getList() {
    getMerchanlist().then(data => {
      console.log(data);
      setData(data);
      console.log("barData", barData);
    });
  }

  return (
    <div className="analysis">
      {/* 饼图 */}
      {/* <Bar data={data}/>
      <Pie data={data} /> */}
      <div id="analysis-container"></div>
    </div>
  );
};
export default Analysis;

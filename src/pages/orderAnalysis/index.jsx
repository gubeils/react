import React, { useEffect, useState } from "react";
import { getOrderlist } from "../../api/order";
import { Switch } from "antd";
import * as echarts from "echarts";
import "./index.less";
// import { Switch } from "react-router-dom";
// import Pie from "./components/pie";
// import Bar from "./components/bar";

const OrderAnalysis = props => {
  const [data, setData] = useState([]);

  let barData;

  // console.log('values',values);
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    
      barData = [
        data.filter(item => item.ordermoney > 0 && item.ordermoney <= 30).length,
        data.filter(item => item.ordermoney > 31 && item.ordermoney <= 60).length,
        data.filter(item => item.ordermoney > 61 && item.ordermoney <= 90).length,
        data.filter(item => item.ordermoney > 91 && item.ordermoney <= 120).length,
        data.filter(item => item.ordermoney > 121 && item.ordermoney <= 150).length,
        data.filter(item => item.ordermoney > 151 && item.ordermoney <= 180).length,
        data.filter(item => item.ordermoney > 181 && item.ordermoney <= 210).length,
        data.filter(item => item.ordermoney > 211 && item.ordermoney <= 240).length,
        data.filter(item => item.ordermoney > 241 && item.ordermoney <= 270).length,
        data.filter(item => item.ordermoney > 271 && item.ordermoney <= 300).length,
      ];
    
    var myChart = echarts.init(document.getElementById("container-box"));

    let option = {
      title: {
        text: "用户消费区间分析",
        left: "center",
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: "category",
        data: [
          "0-30",
          "31-60",
          "61-90",
          "91-120",
          "121-150",
          "151-180",
          "181-210",
          "211-240",
          "240-270",
          "270-500",
        ],
      },
      color: ["#91cd77", "#ef6567"],
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: barData,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    option && myChart.setOption(option);
  }, [data]);
  // 方法
  function getList() {
    getOrderlist().then(data => {
      console.log(data);
      setData(data);
      console.log("barData", barData);
    });
  }

  return (
    <div className="container">
      {/* 饼图 */}
      {/* <Bar data={data}/>
      <Pie data={data} /> */}
      <div id="container-box"></div>
    </div>
  );
};
export default OrderAnalysis;

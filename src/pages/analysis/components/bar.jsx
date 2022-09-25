import React, { useEffect } from "react";
import * as echarts from "echarts";
import "../index.less";
const Bar = props => {
  let barData = [];
  const { data } = props;
  useEffect(() => {
    barData = [
      data.filter(item => item.age > 0 && item.age <= 10).length,
      data.filter(item => item.age > 10 && item.age <= 20).length,
      data.filter(item => item.age > 20 && item.age <= 30).length,
      data.filter(item => item.age > 30 && item.age <= 40).length,
      data.filter(item => item.age > 40 && item.age <= 50).length,
      data.filter(item => item.age > 50 && item.age <= 60).length,
      data.filter(item => item.age > 60 && item.age <= 70).length,
      data.filter(item => item.age > 70 && item.age <= 80).length,
      data.filter(item => item.age > 80 && item.age <= 90).length,
      data.filter(item => item.age > 90 && item.age <= 100).length,
    ];
    renderBar();
  }, [data]);

  function renderBar() {
    var myChart = echarts.init(document.getElementById("analysis-container"));

    let option = {
      title: {
        text: "注册用户年龄分析",
        left: "center",
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        top: "7%",
        left: "center",
      },
      xAxis: {
        type: "category",
        data: [
          "0-10",
          "11-20",
          "21-30",
          "31-40",
          "41-50",
          "51-60",
          "61-70",
          "71-80",
          "81-90",
          "91-100",
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
  }
  return (
    //  {/* 柱状图 */}
    <div id="analysis-container"></div>
  );
};
export default Bar

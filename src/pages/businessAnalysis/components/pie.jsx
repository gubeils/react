import React, { useEffect } from "react";
import * as echarts from "echarts";
import "../index.less";
const Pie = props => {
  let pieData = [];
  const { data } = props;
  useEffect(() => {
    pieData = [
      { value: data.filter(item => item.sex === "男").length, name: "男生" },
      { value: data.filter(item => item.sex === "女").length, name: "女生" },
    ];
    renderPie();
  }, [data]);

  function renderPie() {
    var myChart = echarts.init(document.getElementById("analysis-container"));

    let option = {
      title: {
        text: "注册用户男女占比分析图",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "7%",
        left: "center",
      },
      color: ["#91cd77", "#ef6567"],
      series: [
        {
          
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: true,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: pieData,
          // [
          //   { value: 1048, name: "Search Engine" },
          //   { value: 735, name: "Direct" },
          //   { value: 580, name: "Email" },
          //   { value: 484, name: "Union Ads" },
          //   { value: 300, name: "Video Ads" },
          // ],
        },
      ],
    };
    option && myChart.setOption(option);
  }
  return (
    //  {/* 柱状图 */}
    <div id="analysis-bar"></div>
  );
};
export default Pie;

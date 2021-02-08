<template>
  <div ref="scatterGL" style="width:100%;height:400px;"></div>
</template>

<script>
export default {
  mounted() {
    var option = {
      title: {
        left: "center",
        show: false,
      },
      grid: {
        left: "3%",
        right: "5%",
        bottom: "5%",
        containLabel: true,
      },
      tooltip: {
        showDelay: 0,
        formatter: function(params) {
          //格式化鼠标移上去显示内容样式
          if (params.value.length > 1) {
            return params.value[2];
          }
        },
        backgroundColor: "#fff", //气泡背景色
        textStyle: {
          //文字样式
          color: "#333",
        },
        borderColor: "#CBCBCB", //气泡边框颜色
        borderWidth: 1, //气泡边框款
        extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);", //API中的让气泡带有阴影的效果
      },
      xAxis: [
        {
          type: "value",
          scale: false,
          axisLabel: {
            formatter: "{value}%",
          },
          axisTick: {
            //刻度线样式
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          scale: false,
          axisLabel: {
            formatter: "{value}",
          },
          axisTick: {
            show: false,
          },
        },
      ],
      series: [
        {
          type: "scatter",
          symbol: `path://M19,27A23.319,23.319,0,0,1,5.565,23.046C1.976,20.5,0,17.106,0,13.5s1.976-7,5.565-9.546A23.319,23.319,0,0,1,19,0,23.319,23.319,0,0,1,32.435,3.954C36.023,6.5,38,9.894,38,13.5s-1.976,7-5.565,9.546A23.319,23.319,0,0,1,19,27ZM19,1C9.075,1,1,6.607,1,13.5S9.075,26,19,26s18-5.608,18-12.5S28.925,1,19,1Z   `,
          symbolSize: 20,
          data: [
            [10.0, 8.04, "point1"],
            [8.0, 6.95, "point2"],
            [13.0, 7.58, "point3"],
            [9.0, 8.81, "point4"],
            [11.0, 8.33, "point5"],
          ],
          itemStyle: {
            //当前数据的样式
            normal: { color: "#FFDB10" },
          },
        },
        {
          type: "scatter",
          symbolSize: [10, 30],
          symbolOffset: [0, -15],
          symbol: `path://M2,23.5,0-2H7L5,23.5a1.5,1.5,0,0,1-3,0Z`,
          data: [
            [10.0, 8.04, "point1"],
            [8.0, 6.95, "point2"],
            [13.0, 7.58, "point3"],
            [9.0, 8.81, "point4"],
            [11.0, 8.33, "point5"],
          ],
          itemStyle: {
            //当前数据的样式
            normal: { color: "#FFDB10" },
          },
        },
        {
          type: "scatter",
          symbolSize: 40,
          symbolOffset: [0, 0],
          symbol: `path://M19,27A23.319,23.319,0,0,1,5.565,23.046C1.976,20.5,0,17.106,0,13.5s1.976-7,5.565-9.546A23.319,23.319,0,0,1,19,0,23.319,23.319,0,0,1,32.435,3.954C36.023,6.5,38,9.894,38,13.5s-1.976,7-5.565,9.546A23.319,23.319,0,0,1,19,27ZM19,1C9.075,1,1,6.607,1,13.5S9.075,26,19,26s18-5.608,18-12.5S28.925,1,19,1Z   `,

          data: [
            [114.071, 22.61, "point1"],
            [114.073, 22.64, "point2"],
            [114.075, 22.63, "point3"],
            [114.07, 22.66, "point4"],
            [114.072, 22.613, "point5"],
          ],
          itemStyle: {
            //当前数据的样式
            normal: { color: "#FFDB10" },
          },
        },
      ], //
    };
    var echart = this.$echarts.init(this.$refs.scatterGL);
    echart.setOption(option);
  },
};
</script>

<style></style>

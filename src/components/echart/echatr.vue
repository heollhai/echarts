<template>
  <div class="Echart" style="height: 100%" ref="echart"></div>
</template>

<script>
export default {
  props: {
    //
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
    //判断  是否需要  坐标
    isAxisChart: {
      type: Boolean,
      default: true,
    },
    colorList: {
      type: Array,
      default: () => {
        return [
          "#C1232B",
          "#B5C334",
          "#FCCE10",
          "#E87C25",
          "#27727B",
          "#FE8463",
          "#9BCA63",
          "#FAD860",
        ];
      },
    },
  },
  data() {
    return {
      echart: null,
      echart3D: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        // echart  距离周边的距离
        grid: {
          left: "2%",
          right: "2%",
          top: "10%",
          bottom: "18%",
        },
        xAxis: [
          {
            axisLabel: {
              show: true,
              textStyle: {
                color: "#aaaaaa",
                fontSize: 12,
              },
              margin: 20, //刻度标签与轴线之间的距离。
            },
            axisLine: {
              show: false, //不显示x轴
            },
            axisTick: {
              show: false, //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
              show: false,
              width: 0.08,
              lineStyle: {
                type: "solid",
                color: "#03202E",
              },
            },
          },
        ],
        yAxis: [
          {
            show: true, //
            splitLine: {
              show: true,
              lineStyle: {
                color: "#eee",
                type: "solid",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            label: {
              show: true, //开启显示
              position: "top", //在上方显示
              textStyle: {
                //数值样式
                color: "black",
                fontSize: 16,
                fontWeight: 600,
                padding: 20,
                // top:80,
              },
            },
            //柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [60, 22], //调整截面形状
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
              normal: {
                color: (params) => {
                  var colorArr = [
                    "#C1232B",
                    "#B5C334",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                  ];
                  return colorArr[params.dataIndex];
                },
              },
            },
          },

          //柱体
          {
            name: "",
            type: "bar",
            barWidth: 60,
            barGap: "0%",
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    "#C1232B",
                    "#B5C334",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                    "#FAD860",
                  ];

                  return colorList[params.dataIndex];
                },
                opacity: 0.7,
              },
            },
          },
          //柱顶圆片
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [60, 22], //调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: "end",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorArr = [
                    "#C1232B",
                    "#B5C334",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                  ];
                  return colorArr[params.dataIndex];
                },
              },
            },
          },
        ],
      },
      normal3D: {
        series: [],
      },
    };
  },
  computed: {
    // 是否需要坐标
    options() {
      return this.isAxisChart ? this.echart3D : this.normal3D;
    },
  },
  mounted() {
    // 初始化
    this.initChart();
    window.addEventListener("resize", this.resizeChart);
    this.resizeChart();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },
  methods: {
    //判断没有初始化
    initChart() {
      this.initChartData();
      if (this.echart) {
        //有初始化  使用刚指定的配置项和数据显示图表
        this.echart.setOption(this.options);
      } else {
        //没有初始化 先初始化  在使用
        var echarts = require("echarts");
        console.log(echarts, "reree");
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    resizeChart() {
      this.echart ? this.echart.resize() : "";
    },
    initChartData() {
      if (this.isAxisChart) {
        this.echart3D.xAxis[0].data = this.option.xData;
        console.log(this.option.series, "this.option.series");
        console.log(this.echart3D.series, "llll");
        this.echart3D.series.map((item) => {
          console.log(item);
          item.data = this.option.series;
          return item;
        });
        // this.echart3D.series =  this.option.series
      } else {
        this.normal3D = this.option;
        console.log(this.option, "this.option-----");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.Echart {
  width: 100%;
  height: 100%;
}
</style>

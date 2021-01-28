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
  },
  data() {
    return {
      echart: null,
      echart3D: {
        // label: {
        //   show: true, //开启显示
        //   position: "top", //在上方显示
        //   textStyle: {
        //     //数值样式
        //     color: "black",
        //     fontSize: ,
        //     fontWeight: 600,
        //   },
        // },
        title: {
          text: "",
          textStyle: {
            // color: "red",
          },
          padding: [10, 0, 10, 100], // 位置
        },
        legend: {
          selectedMode: false, //禁用点击事件
          type: "plain", // 图列类型，默认为 'plain'
          right: "10%",
          top: 10,
          textStyle: {
            // 图列内容样式
            color: "#ccc", // 字体颜色
          },
          tooltip: {
            // 图列提示框，默认不显示
            show: true,
            color: "red",
          },
        },
        // 鼠标放上效果
        tooltip: {
          trigger: "axis",
          textStyle: {
            align: "left",
          },
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        // echart  距离周边的距离
        grid: {
          left: "3%",
          right: "3%",
          top: "15%",
          bottom: "5%",
          containLabel: true,
        },
        // x轴效果
        xAxis: [
          {
            axisLabel: {
              show: true,
              textStyle: {
                color: "#000000",
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
                color: "#000000",
              },
            },
          },
        ],
        // y 轴效果
        yAxis: [
          {
            show: true, //不显示y轴
            splitLine: {
              show: true, //false 隐藏 网格
              lineStyle: {
                //网格样式
                color: "#eee",
                type: "solid",
              },
            },
            // axisTick: {
            //   show: false,
            // },
            // axisLine: {
            //   show: false,
            // },
            axisLabel: {
              textStyle: {
                color: "",
              },
            },
          },
        ],
        series: [],
      },
      normal3D: {
        series: [],
      },
    };
  },
  computed: {
    // 3d还是饼图
    options() {
      return this.isAxisChart ? this.echart3D : this.normal3D;
    },
  },
  mounted() {
    // 初始化
    this.initChart();
    // 窗口大小改变，适配大小
    window.addEventListener("resize", this.resizeChart);
    this.resizeChart();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },
  methods: {
    //判断echart有没有初始化
    initChart() {
      this.initChartData();
      if (this.echart) {
        //有初始化  使用刚指定的配置项和数据显示图表
        this.echart.setOption(this.options);
      } else {
        //没有初始化 先初始化  在使用
        var echarts = require("echarts");
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    resizeChart() {
      this.echart ? this.echart.resize() : "";
    },
    //
    initChartData() {
      if (this.isAxisChart) {
        let data = {};
        // 判断 传入的 series 长度 循环赋值给到 this.echart3D.series
        data = this.seriesData();
        // 对 this.echart3D.series  进行初始化  赋值
        this.option.series.forEach(() => {
          this.echart3D.series.push(...JSON.parse(JSON.stringify(data)));
        });

        this.echart3D.series.map((item, index) => {
          // index 0 -2 代表一根圆柱  一次类推  后面看下有无办法，，修改为循环赋值
          // 对 第一根柱子赋值
          var len = this.echart3D.series.length / 3;
          console.log(len, "pppp");
          var Type = false;
          console.log(Type);
          var nums = 1;
          console.log(index, len * 3, "len * 3");
          if (index <= 2) {
            this.judge(item, this.option, 0);
            if (len !== nums) {
              Type = true;
              console.log(Type, 1231231);
            }
          } else if (index > 2 && index <= 5) {
            // 对 第2根柱子赋值
            this.judge(item, this.option, 1);
          } else if (index > 5 && index <= 8) {
            // 对 第3根柱子赋值
            this.judge(item, this.option, 2);
          }
          // if (index <= 2) {
          //   this.judge(item, this.option, 0);
          //   console.log();
          // } else if (index > 2 && index <= 5) {
          //   // 对 第2根柱子赋值
          //   this.judge(item, this.option, 1);
          // } else if (index > 5 && index <= 8) {
          //   // 对 第3根柱子赋值
          //   this.judge(item, this.option, 2);
          // }
          // 如果 有两根圆柱那么修改  所有圆柱的 偏移量
          let length = this.echart3D.series.length;
          if (length > 3 && length <= 6) {
            switch (index) {
              case 1:
                item.symbolOffset = ["-50%", "50%"]; //第一个圆柱下面的园
                break;
              case 2:
                item.symbolOffset = ["-50%", "-50%"]; //第一个圆柱上面的园
                break;
              case 4:
                item.symbolOffset = ["50%", "50%"];
                break;
              case 5:
                item.symbolOffset = ["50%", "-50%"];
                break;
            }
          } else if (length > 6 && length <= 9) {
            switch (index) {
              case 1:
                item.symbolOffset = ["-100%", "50%"]; //第一个圆柱下面的园
                break;
              case 2:
                item.symbolOffset = ["-120%", "-50%"]; //第一个圆柱上面的园
                break;
              case 4:
                item.symbolOffset = ["0%", "50%"];
                break;
              case 5:
                item.symbolOffset = ["0%", "-50%"];
                break;
              case 7:
                item.symbolOffset = ["100%", "-50%"];
                break;
              case 8:
                item.symbolOffset = ["120%", "-50%"];
                break;
            }
          }
          return item;
        });
        // x轴数据
        this.echart3D.xAxis[0].data = this.option.xData;
        //  xy轴 标题 颜色
        this.echart3D.yAxis[0].axisLabel.textStyle.color = this.option.XYTitleColor;
        this.echart3D.xAxis[0].axisLabel.textStyle.color = this.option.XYTitleColor;
        this.echart3D.title.textStyle.color = this.option.XYTitleColor;
        this.echart3D.legend.textStyle.color = this.option.XYTitleColor;
        this.echart3D.title.text = this.option.title;
      } else {
        // 如果进来的是饼图
        this.normal3D = this.option;
      }
    },
    judge(item, option, num) {
      if (this.option.series[num] !== undefined) {
        item.data = option.series[num].data;
        item.itemStyle.normal.color = option.series[num].color;
        item.name = option.series[num].name;
      }
    },
    // 初始数据
    seriesData() {
      let seriesData = [];
      seriesData.push(
        {
          z: 1,
          name: "",
          type: "bar",
          barWidth: 15,
          barGap: "0%",
          data: [],
          itemStyle: {
            normal: {
              color: "red",
            },
          },
        },
        {
          z: 2,
          name: "",
          type: "pictorialBar",
          data: [],
          symbol: "diamond",
          symbolOffset: ["-0%", "50%"],
          symbolSize: [15, 10],
          itemStyle: {
            normal: {
              color: "red",
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          z: 3,
          name: "",
          type: "pictorialBar",
          symbolPosition: "end",
          data: [],
          symbol: "diamond",
          symbolOffset: ["-0%", "-50%"],
          symbolSize: [15 - 4, (10 * (15 - 4)) / 15],
          itemStyle: {
            normal: {
              borderColor: "#8bead4",
              borderWidth: 2,
              color: "red",
            },
          },
          tooltip: {
            show: false,
          },
        }
      );
      return seriesData;
    },
  },
};
</script>

<style lang="scss" scoped>
.Echart {
  width: 100%;
  height: 100%;
  // color: blue;
}
</style>

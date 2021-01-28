<!-- 
	option: {
	  xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
	  title: "标题",
	  width:25,
	  series: [
	    {
	      color: "#1C68FF",
	      name: "删除",
	      data: ["100", "102", "114", "268", "68", "257", "400"],
	    },
	  ],
	  XYColor: "red",
	  titleColor:'#000'
	},
					作用			是否必须
	isAxisChart 	饼图还是3d圆柱		默认3d圆柱	布尔类型
	xData 	  		x轴显示数据			是			[]
	series[								是			[]
		color 		圆柱的颜色			否			string
		name 		圆柱名称				否(没有 标题右侧 不会显示出来)
		data 		圆柱显示的数据		是			[]
	]
	title     		标题				否			string
	XYColor  		x y 轴颜色			否			string
	titleColor  	标题颜色				否 (没有跟随  XYColor 的颜色)
	width 	  		圆柱宽度				否			number    默认25
 -->
<template>
  <div class="Echart" style="height: 100%" ref="echart"></div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    },
    //判断  3d还是饼图
    isAxisChart: {
      type: Boolean,
      default: true
    }
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
          padding: [10, 0, 10, 100] // 位置
        },
        legend: {
          selectedMode: false, //禁用点击事件
          type: "plain", // 图列类型，默认为 'plain'
          right: "10%",
          top: 10,
          textStyle: {
            // 图列内容样式
            color: "#ccc" // 字体颜色
          },
          tooltip: {
            // 图列提示框，默认不显示
            show: true,
            color: "red"
          }
        },
        // 鼠标放上效果
        tooltip: {
          trigger: "axis",
          textStyle: {
            align: "left"
          },
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // echart  距离周边的距离
        grid: {
          left: "3%",
          right: "3%",
          top: "15%",
          bottom: "5%",
          containLabel: true
        },
        // x轴效果
        xAxis: [
          {
            axisLabel: {
              show: true,
              textStyle: {
                color: "#000000",
                fontSize: 12
              },
              margin: 20 //刻度标签与轴线之间的距离。
            },
            axisLine: {
              show: false //不显示x轴
            },
            axisTick: {
              show: false //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
              show: false,
              width: 0.08,
              lineStyle: {
                type: "solid",
                color: "#000000"
              }
            }
          }
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
                type: "solid"
              }
            },
            // axisTick: {
            //   show: false,
            // },
            // axisLine: {
            //   show: false,
            // },
            axisLabel: {
              textStyle: {
                color: ""
              }
            }
          }
        ],
        series: []
      },
      normal3D: {
        series: []
      }
    };
  },
  computed: {
    // 3d还是饼图
    options() {
      return this.isAxisChart ? this.echart3D : this.normal3D;
    }
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
        // 根据 传入的 series 长度 循环赋值给到 this.echart3D.series
        data = this.seriesData(this.option.width ? this.option.width : 25);
        // 对 this.echart3D.series  进行初始化  赋值
        this.option.series.forEach(() => {
          this.echart3D.series.push(...JSON.parse(JSON.stringify(data)));
        });

        this.echart3D.series.map((item, index) => {
          // index 0 -2 代表一根圆柱  一次类推  后面看下有无办法，，修改为循环赋值
          // 对 第一根柱子赋值
          if (index < 3) {
            this.judge(item, this.option, 0);
          } else if (index >= 3 && index < 6) {
            // 对 第2根柱子赋值
            this.judge(item, this.option, 1);
          } else if (index >= 6 && index < 9) {
            // 对 第3根柱子赋值
            this.judge(item, this.option, 2);
          } else if (index >= 9 && index < 12) {
            // 对 第4根柱子赋值
            this.judge(item, this.option, 3);
          }
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
            // 如果 有三根圆柱那么修改  所有圆柱的 偏移量
            switch (index) {
              case 1:
                item.symbolOffset = ["-100%", "50%"]; //第一个圆柱下面的园
                break;
              case 2:
                item.symbolOffset = ["-115%", "-50%"]; //第一个圆柱上面的园
                break;
              case 4:
                item.symbolOffset = ["0%", "50%"];
                break;
              case 5:
                item.symbolOffset = ["0%", "-50%"];
                break;
              case 7:
                item.symbolOffset = ["100%", "50%"];
                break;
              case 8:
                item.symbolOffset = ["115%", "-50%"];
                break;
            }
          } else if (length > 9 && length <= 12) {
            // 如果 有四根圆柱那么修改  所有圆柱的 偏移量
            switch (index) {
              case 1:
                item.symbolOffset = ["-150%", "50%"]; //第一个圆柱下面的园
                break;
              case 2:
                item.symbolOffset = ["-165%", "-50%"]; //第一个圆柱上面的园
                break;
              case 4:
                item.symbolOffset = ["-50%", "50%"];
                break;
              case 5:
                item.symbolOffset = ["-50%", "-50%"];
                break;
              case 7:
                item.symbolOffset = ["50%", "50%"];
                break;
              case 8:
                item.symbolOffset = ["50%", "-50%"];
                break;
              case 10:
                item.symbolOffset = ["150%", "50%"];
                break;
              case 11:
                item.symbolOffset = ["170%", "-50%"];
                break;
            }
          }
          return item;
        });
        // x轴数据
        this.echart3D.xAxis[0].data = this.option.xData;
        //  xy轴 标题 颜色
        this.echart3D.yAxis[0].axisLabel.textStyle.color = this.option.XYColor;
        this.echart3D.xAxis[0].axisLabel.textStyle.color = this.option.XYColor;
        // 标题   左右侧颜色
        if (this.option.titleColor !== undefined) {
          this.echart3D.title.textStyle.color = this.option.titleColor;
          this.echart3D.legend.textStyle.color = this.option.titleColor;
        } else {
          this.echart3D.title.textStyle.color = this.option.XYColor;
          this.echart3D.legend.textStyle.color = this.option.XYColor;
        }

        this.echart3D.title.text = this.option.title;
      } else {
        // 如果进来的是饼图
        this.normal3D = this.option;
      }
    },
    // 给某一跟圆柱赋值
    judge(item, option, num) {
      if (this.option.series[num] !== undefined) {
        item.data = option.series[num].data;
        item.itemStyle.normal.color = option.series[num].color;
        item.name = option.series[num].name;
      }
    },
    // 初始数据
    seriesData(width) {
      let seriesData = [
        {
          z: 1,
          name: "",
          type: "bar",
          barWidth: width,
          barGap: "0%",
          data: [],
          itemStyle: {
            normal: {
              color: "red"
            }
          }
        },
        {
          z: 2,
          name: "",
          type: "pictorialBar",
          data: [],
          symbol: "diamond",
          symbolOffset: ["-0%", "50%"],
          symbolSize: [width, 10],
          itemStyle: {
            normal: {
              color: "red"
            }
          },
          tooltip: {
            show: false
          }
        },
        {
          z: 3,
          name: "",
          type: "pictorialBar",
          symbolPosition: "end",
          data: [],
          symbol: "diamond",
          symbolOffset: ["-0%", "-50%"],
          symbolSize: [width - 4, (10 * (width - 4)) / width],
          itemStyle: {
            normal: {
              borderColor: "#8bead4",
              borderWidth: 2,
              color: "red"
            }
          },
          tooltip: {
            show: false
          }
        }
      ];
      return seriesData;
    }
  }
};
</script>

<style lang="scss" scoped>
.Echart {
  width: 100%;
  height: 100%;
}
</style>

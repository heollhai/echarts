<template>
  <div>
    <div id="map" ref="myEchart"></div>
  </div>
</template>

<script>
import "echarts-gl";
import guangdong from "@/assets/js/city/guangdong.json";
let Echarts;
export default {
  props: {
    cityName: {
      type: String,
      default: "广东",
    },
  },
  data() {
    return {
      city: {
        广东: guangdong,
      },
      isProvince: true,
    };
  },
  mounted() {
    console.log(this.$echarts, "$echarts");
    this.renderMap("广东");
  },
  methods: {
    map(name = "广东") {
      console.log(name, "name");
      var min = 0,
        max = 300;
      let option = {
        tooltip: {
          show: true,
          formatter: (params) => {
            return `<div style="position:absolute;left:0;top:0;width:8px;height:8px;background-color:#FD9A5A;"></div>
            <div class='tips' style="padding:0 12px;">
                <h1 style='font-size:16px;'>${params.name}</h1>
                <p style="font-size:14px;"><span style="opacity:0.75">办理人数：</span>22人</p>
                <p style="font-size:14px;"><span style="opacity:0.75">待办人数：</span>22人</p>
                <p style="font-size:14px;"><span style="opacity:0.75">办结人数：</span>22人</p>
            </div>`;
          },
          borderColor: "#998484",
          borderWidth: 1,
          padding: [0, 0],
          backgroundColor: "#1B212B",
          borderRadius: 0,
          // textStyle: { color: "blue" },
        },
        visualMap: {
          show: false,
          min: min, //指定 visualMapContinuous 组件的允许的最小值。
          max: max, //指定 visualMapContinuous 组件的允许的最大值
          inRange: {
            color: ["#008FFF"],
          },
          calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
        },
        series: {
          name: "广东",
          type: "map3D",
          map: "广东", //地图类型。echarts-gl 中使用的地图类型同 geo 组件相同
          data: this.cityJson,
          regionHeight: 4, //模型的高度
          boxWidth: 100, //三维地图在三维场景中的宽度
          boxDepth: 60, //三维地图在三维场景中的深度
          label: {
            show: true, //是否显示标签。
            formatter: (params) => {
              params.name;
            },
            textStyle: {
              color: "#fff", //地图初始化区域字体颜色
              fontSize: 12,
              position: "inside",
              borderRadius: 0,
              distanca: 20,
              backgroundColor: "auto",
            },
            emphasis: {
              //对应的鼠标悬浮效果
              show: true,
              textStyle: { color: "blue" },
            },
          },
          itemStyle: {
            normal: {
              //静态模式下显示的默认样式
              borderWidth: 0.1,
              borderColor: "#1B212B",
              color: "#0090FF",
              // areaColor: '#00FFFF',
              // borderWidth: 2,
              // borderColor: '#2AB8FF',
              shadowColor: "red",
              shadowBlur: 10,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
            }, //阴影效果
            emphasis: {
              // 鼠标移上去的样式
              borderWidth: 1.6,
              borderColor: "#95FFFF",
              color: "yellow",
              textStyle: {
                // color:'blue'
              },
            },
          },

          viewControl: {
            //用于鼠标的旋转，缩放等视角控制。
            autoRotate: false, //是否开启视角绕物体的自动旋转查看
            distance: 30, //默认视角距离主体的距离，对于 globe 来说是距离地球表面的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离。在 projection 为'perspective'的时候有效。
          },
        },
      };
      Echarts = this.$echarts.init(this.$refs.myEchart);
      Echarts.setOption(option);
      window.onresize = Echarts.resize();
      Echarts.on("click", (e) => {
        if (this.isProvince) this.renderMap(e.name);
      });
      // tooltip定时移动
      // var counts = 0;
      // if (timmerOneAnim) {
      //   clearInterval(timmerOneAnim);
      // }
      // let timmerOneAnim = setInterval(() => {
      //   Echarts.dispatchAction({
      //     type: "showTip",
      //     seriesIndex: 0,
      //     dataIndex: counts % city.length,
      //   });
      //   counts++;
      // }, 3000);
    },
    renderMap(name) {
      console.log(this.$echarts, "this.$echarts");
      console.log(name, this.city[name]);
      if (name != "广东省" && name) {
        this.isProvince = false;
        this.$echarts.registerMap(name, this.city[name]); //获取对应的json数据,最主要的
        // Echarts.clear();
        this.map(name);
        this.$emit("changeMap", name);
      } else if (name == "广东省") {
        this.isProvince = true;
        // Echarts.clear();
        this.map();
        this.$emit("changeMap", name);
      } else {
        this.isProvince = true;
        // Echarts.clear();
        this.map();
      }
    },
  },
};
</script>

<style scoped lang="scss">
// @keyframes shake {
//   0% {
//     transform: scale(0);
//     transform: rotate3d(1, 1, 1, 360deg);
//     opacity: 0;
//   }
//   100% {
//     transform: scale(1);
//     transform: rotate3d(1, 1, 1, 0deg);
//     opacity: 1;
//   }
// }
// @-webkit-keyframes shake {
//   0% {
//     transform: scale(0);
//     transform: rotate3d(1, 1, 1, 360deg);
//     opacity: 0;
//   }
//   100% {
//     transform: scale(1);
//     transform: rotate3d(1, 1, 1, 0deg);
//     opacity: 1;
//   }
// }
.returnBtn {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  cursor: pointer;
}
#map {
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  animation: shake; /*动画名称*/
  animation-timing-function: linear;
  animation-duration: 2; /*动画持续时间*/
  -webkit-animation: shake 3s; /*针对webkit内核*/
}
</style>

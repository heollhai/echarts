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
    this.renderMap("广东");
  },
  methods: {
    map(name = "广东") {
      console.log(name);
      var min = 0,
        max = 300;
      console.log(min, max);
      let option = {
        title: {
          text: "3D地图与3D柱状图",
        },
        geo3D: {
          map: "广东",
          itemStyle: {
            areaColor: "#001242",
            opacity: 1,
            borderWidth: 0.8,
            borderColor: "#fff",
          },
        },
        series: [
          {
            type: "bar3D",
            coordinateSystem: "geo3D",
            barSize: 0.4, //柱子粗细
            shading: "lambert",
            bevelSize: 0.3,
            minHeight: 1,
            itemStyle: {
              color: "#ffb526",
              opacity: 1,
            },
            label: {
              show: false,
              formatter: (record) => {
                return `${record.name}\n重量：${record.value[2].toFixed(2)}吨`;
              },
            },
            data: [
              {
                itemStyle: {
                  color: "blue",
                },
                value: [113.280637, 23.125178, 100],
              },
              [117.191041, 39.134857, 20],
              [114.511934, 38.058785, 30],
              [112.543424, 37.887658, 40],
              [111.694848, 40.836106, 50],
            ],
          },
        ],
      };
      Echarts = this.$echarts.init(this.$refs.myEchart);
      Echarts.setOption(option);
      window.onresize = Echarts.resize();
      Echarts.on("click", (e) => {
        console.log(e);
      });
    },
    renderMap(name) {
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

<template>
  <div class="map2d_1" ref="map111"></div>
</template>

<script>
// import guangdong from "@/assets/js/city/guangdong.json";
export default {
  props: {
    city: Object,
  },
  data() {
    return {
      // city: {
      //   广东: guangdong,
      // },
      echart: null,
    };
  },
  mounted() {
    var setOption = {
      tooltip: {
        triggerOn: "click",
        enterable: true,
      },
      series: [
        {
          type: "map",
          map: "广东",
          zoom: 1,
          label: {
            show: true,
            color: "white",
            fontSize: 10,
          },
          itemStyle: {
            normal: {
              borderWidth: 2, //边际线大小
              borderColor: "#00ffff", //边界线颜色
              areaColor: "#09295b", //默认区域颜色
            },
            emphasis: {
              show: true,
              areaColor: "#3066ba", //鼠标滑过区域颜色
              label: {
                show: true,
                textStyle: {
                  color: "#fff",
                },
              },
            },
          },
        },
      ],
    };
    let key = Object.keys(this.city)[0];
    var echarts = require("echarts");
    echarts.registerMap(key, this.city[key]);
    this.echart = echarts.init(this.$refs.map111);
    this.echart.setOption(setOption);
  },
};
</script>

<style>
.map2d_1 {
  width: 100%;
  height: 100%;
}
</style>

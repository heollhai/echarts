<template>
  <div>
    <div id="main" ref="echart" style="width: 100%; height: 400px;"></div>
    <div class="box" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
  </div>
</template>

<script>
import "echarts-gl";
import nanShang from "../../assets/js/city/nanshang.json";
import shenzheng from "../../assets/js/city/shenzheng.json";
import longhua from "../../assets/js/city/longhua.json";
export default {
  data() {
    return {
      img: require("../../assets/logo.png"),
      echart: null,
      city: {
        南山区: nanShang,
        深圳: shenzheng,
        龙华区: longhua,
      },
    };
  },
  mounted() {
    this.mapInit();
    //地图点击事件;
    // let that = this;
    // this.echart.on("click", function(e) {
    //   console.log(e.name, "w", that.echart);
    //   that.echart.clear();
    //   that.initMap(`${e.name}`, 200);
    //   // this.echarts.registerMap("tongren", this.city[e.name]);
    // });
  },
  methods: {
    mapInit() {
      var echarts = require("echarts");
      echarts.init(this.$refs.echart);

      const d = [];
      for (let i = 0; i < this.city["深圳"].features.length; i++) {
        let city = this.city["深圳"].features[i].properties;
        d.push({
          name: this.city["深圳"].features[i].properties.name,
          value: Math.ceil(Math.random() * 10),
          cp: city.centroid,
        });
      }
      echarts.registerMap("深圳", this.city["深圳"]);
      this.glInit("深圳", d, echarts);
      this.echart = echarts;
    },
    glInit(map, d, echarts) {
      console.log(d, map, echarts);
      const geoCoordMap = {
        点位1: [114.071, 22.61],
        点位2: [114.073, 22.64],
        点位3: [114.075, 22.63],
        点位4: [114.07, 22.66],
        点位5: [114.072, 22.61],
      };
      var mydata = [{ name: "北京", value: Math.round(Math.random() * 500) }];
      //最后的空的是给一个最小值这样打的点不会塌陷到地图里面。
      const convertData = function(data) {
        const res = [];
        for (let i = 0; i < data.length; i++) {
          const geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      var dataTemp = [
        {
          lng: "114.071",
          num: 10,
          time: "2020-03-19 08",
          stationname: "太古小学（鄞州）",
          lat: "22.61",
        },
        {
          lng: "114.073",
          num: 65,
          time: "2020-03-19 08",
          stationname: "万里学院（鄞州）",
          lat: "22.64",
        },
      ];

      const iconLD =
        "path://M512 144.896c-141.312 0-256.512 115.2-256.512 256.512 0 178.688 164.864 372.224 227.328 445.44 9.728 11.776 15.872 18.944 18.432 22.528 2.56 3.584 6.656 5.632 10.752 5.632 3.584 0 7.168-1.536 9.728-4.096l1.024-1.024 0.512-1.024c2.048-3.072 7.68-9.728 18.944-23.04 61.952-73.728 226.816-268.8 226.816-444.416C768.512 260.096 653.312 144.896 512 144.896z m0 352.256c-52.736 0-95.744-43.008-95.744-95.744s43.008-95.744 95.744-95.744 95.744 43.008 95.744 95.744-43.008 95.744-95.744 95.744z";
      console.log(iconLD, convertData);
      var option = {
        backgroundColor: "#FFFFFF",
        title: {
          text: "深圳地图",
          x: "center",
        },
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          show: false,
          x: "left",
          y: "bottom",
          splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 },
          ],
          color: [
            "#66CC33",
            "#00FF00",
            "#66FF33",
            "#339900",
            "#33CC00",
            "#00CC00",
          ],
        },
        series: [
          {
            map: "深圳",
            name: "随机数据",
            type: "map",
            roam: true,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            data: mydata,
          },
          {
            name: "地图",
            type: "custom",
            coordinateSystem: "geo",

            data: dataTemp,
          },
        ],
      };
      this.echart = echarts.init(this.$refs.echart);
      this.echart.setOption(option);
    },
  },
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
}
</style>

<template>
  <div id="mapinfo" ref="map123" :style="{ width: '100%', height: '400px' }" />
</template>
<script>
import "echarts-gl";
import nanShang from "../../assets/js/city/nanshang.json";
import shenzheng from "../../assets/js/city/shenzheng.json";
import longhua from "../../assets/js/city/longhua.json";
export default {
  data() {
    return {
      info_canvas: "56vh",
      city: {
        南山区: nanShang,
        深圳: shenzheng,
        龙华区: longhua,
      },
    };
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      var echarts = require("echarts");
      echarts.init(this.$refs.map123);
      const d = [];
      for (let i = 0; i < this.city["深圳"].features.length; i++) {
        d.push({
          name: this.city["深圳"].features[i].properties.name,
          value: Math.ceil(Math.random() * 10),
        });
      }
      echarts.registerMap("深圳", this.city["深圳"]);
      this.glInit("深圳", d, echarts);
      this.echart = echarts;
    },
    glInit(map, d, echarts) {
      console.log(d);
      const geoCoordMap = {
        点位1: [114.071, 22.62],
        点位2: [114.073, 22.63],
        点位3: [114.075, 22.64],
        点位4: [114.07, 22.66],
        点位5: [114.072, 22.61],
      };
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
      const iconLD =
        "path://M512 144.896c-141.312 0-256.512 115.2-256.512 256.512 0 178.688 164.864 372.224 227.328 445.44 9.728 11.776 15.872 18.944 18.432 22.528 2.56 3.584 6.656 5.632 10.752 5.632 3.584 0 7.168-1.536 9.728-4.096l1.024-1.024 0.512-1.024c2.048-3.072 7.68-9.728 18.944-23.04 61.952-73.728 226.816-268.8 226.816-444.416C768.512 260.096 653.312 144.896 512 144.896z m0 352.256c-52.736 0-95.744-43.008-95.744-95.744s43.008-95.744 95.744-95.744 95.744 43.008 95.744 95.744-43.008 95.744-95.744 95.744z";
      const mapOption = {
        geo3D: {
          map,
        },
        series: [
          {
            name: "4A",
            type: "scatter3D",
            coordinateSystem: "geo3D",
            minHeight: 3,
            symbol: `${iconLD}`,
            symbolSize: [20, 40],
            opacity: 1,
            label: {
              show: true,
              formatter: "{b}",
            },
            itemStyle: {
              color: "#D65769",
            },
            data: convertData([
              {
                name: "点位1",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位2",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位3",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
            ]),
          },
        ],
      };
      this.echart = echarts.init(this.$refs.map123);
      this.echart.setOption(mapOption);
    },
  },
};
</script>

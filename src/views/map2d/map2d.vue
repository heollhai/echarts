<template>
  <div>
    <div
      ref="echart"
      style="width: 100%; height: 400px;background:#151834;"
    ></div>
  </div>
</template>

<script>
import "echarts-gl";
import nanShang from "../../assets/js/city/nanshang.json";
import shenzheng from "../../assets/js/city/shenzheng.json";
import longhua from "../../assets/js/city/longhua.json";
import Guangdong from "../../assets/js/city/guangdong.json"
export default {
  data() {
    return {
      img: require("../../assets/logo.png"),
      echart: null,
      city: {
        南山区: nanShang,
        深圳: shenzheng,
        龙华区: longhua,
        广东省:Guangdong
      },
    };
  },
  mounted() {
    this.mapInit();
    console.log(this.city["广东省"],'guandong')
  },
  methods: {
    geos() {
      let geo = [];
      for (var i = 0; i < 20; i++) {
        geo.push({
          shwo: true,
          map: "深圳",
          itemStyle: {
            normal: {
              shadowColor: "rgba(1, 39, 44, 1)",
              shadowOffsetX: 0,
              shadowOffsetY: -5,
            },
          },
        });
      }
      return geo;
    },
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
        点位1: [114.071, 22.71],
        点位2: [114.373, 22.64],
        点位3: [114.275, 22.67],
        点位4: [114.07, 22.58],
        点位5: [114.472, 22.61],
      };

      // //最后的空的是给一个最小值这样打的点不会塌陷到地图里面。
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
      var option = {
        tooltip: {
          trigger: "item",
          // formatter: function(params) {
          //   return params.data.stationname + " : " + params.data.num;
          // },
        },
        geo: [
          {
            shwo: true,
            map: "深圳",
            roam: true,
            zoom: 1.2,
            itemStyle: {
              normal: {
                shadowColor: "#2AF8FB",
                shadowOffsetX: 2,
                shadowOffsetY: 14,
              },
            },
          },
          {
            shwo: true,
            roam: true,
            map: "深圳",
            zoom: 1.2,
            itemStyle: {
              normal: {
                color: "#0079D7",
                shadowColor: "#0066B5",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
              },
            },
            regions: [
              {
                // 重点 部分 ,在这里给大家模拟一个省份颜色与界线颜色的修改,如果想修改多个省份就在后面多添加几个对象即可.
                name: "南山区", // 对应的是import "./china"  数据中的名称如: name: "广东省"(下面有截图)
                itemStyle: {
                  normal: {
                    opacity: 1, // 透明度
                    borderColor: "#0079D7", // 省份界线颜色
                    borderWidth: 3, // 省份界线的宽度
                    areaColor: "red", // 整个省份的颜色
                  },
                },
              },
            ],
          },
        ],
        series: [
          {
            layoutCenter: ["50%", "0%"],
            name: "ships",
            type: "scatter",
            coordinateSystem: "geo",
            symbolSize: 25,
            itemStyle: {
              color: "#FFDB10",
              opacity: 1,
            },
            symbol: `path://M19,27A23.319,23.319,0,0,1,5.565,23.046C1.976,20.5,0,17.106,0,13.5s1.976-7,5.565-9.546A23.319,23.319,0,0,1,19,0,23.319,23.319,0,0,1,32.435,3.954C36.023,6.5,38,9.894,38,13.5s-1.976,7-5.565,9.546A23.319,23.319,0,0,1,19,27ZM19,1C9.075,1,1,6.607,1,13.5S9.075,26,19,26s18-5.608,18-12.5S28.925,1,19,1Z `,
            data: convertData([
              {
                name: "点位1",
                value: (Math.random() * 100 + 200).toFixed(2),
              },
              {
                name: "点位2",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位3",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位4",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位5",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
            ]),
          },
          {
            name: "ships",
            type: "scatter",
            coordinateSystem: "geo",
            symbolSize: 15,
            itemStyle: {
              color: "#FFDB10",
              opacity: 1,
            },
            symbol: `path://M19,27A23.319,23.319,0,0,1,5.565,23.046C1.976,20.5,0,17.106,0,13.5s1.976-7,5.565-9.546A23.319,23.319,0,0,1,19,0,23.319,23.319,0,0,1,32.435,3.954C36.023,6.5,38,9.894,38,13.5s-1.976,7-5.565,9.546A23.319,23.319,0,0,1,19,27ZM19,1C9.075,1,1,6.607,1,13.5S9.075,26,19,26s18-5.608,18-12.5S28.925,1,19,1Z`,
            data: convertData([
              {
                name: "点位1",
                value: (Math.random() * 100 + 200).toFixed(2),
              },
              {
                name: "点位2",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位3",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位4",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位5",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
            ]),
          },
          {
            name: "ships",
            type: "scatter",
            coordinateSystem: "geo",
            symbolOffset: [0, -18],
            symbolSize: [10, 30],
            itemStyle: {
              color: "#FFDB10",
              opacity: 1,
            },
            symbol: `path://M2,23.5,0-2H7L5,23.5a1.5,1.5,0,0,1-3,0Z`,

            data: convertData([
              {
                name: "点位1",
                value: (Math.random() * 100 + 200).toFixed(2),
              },
              {
                name: "点位2",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位3",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位4",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
              {
                name: "点位5",
                value: (Math.random() * 100 + 100).toFixed(2),
              },
            ]),
          },
        ],
      };
      // this.option.geo.push( this.geos();)
      // let list = this.geos();
      // console.log(this.geos,'geos',)
      this.echart = echarts.init(this.$refs.echart);
      this.echart.setOption(option);
      console.log(this.echart.getOption(), "this.echart----");
      // let options  = this.echart.getOption()
      let echartss = this.echart;
      // let that = this;

      echartss.on("georoam", function(params) {
        var option = echartss.getOption(); //获得option对象
        if (params.zoom != null && params.zoom != undefined) {
          //捕捉到缩放时
          option.geo[0].zoom = option.geo[1].zoom; //下层geo的缩放等级跟着上层的geo一起改变
          option.geo[0].center = option.geo[1].center; //下层的geo的中心位置随着上层geo一起改变
        } else {
          //捕捉到拖曳时
          option.geo[0].center = option.geo[1].center; //下层的geo的中心位置随着上层geo一起改变
        }
        echartss.setOption(option); //设置option
      });
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

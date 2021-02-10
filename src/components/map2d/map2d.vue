<!--   
 在 json 中地区添加 "cp": [ 115.524238, 22.974485], 可以修改默认地区显示的文字坐标
                                                 是否必须
   city: {
        广东: guangdong, //地图的json数据                   是
      },
  config: { 
          //第一个颜色是最上层的颜色//最少一个颜色
        mapBg: ["#0079D7", "#2AF8FB", "#2AF8FB"],          是
        bgOffsetX: 0, //底层地图x轴偏移                     否
        bgOffsetY: 0, //底层地图y轴偏移                     否
        regions: [                                         否 
          //需要高亮的区域  姓名和颜色  如果需要设置区域 颜色 
          边框的样式那么可以不要 color  设置 添加 itemStyle 
          设置其他属性(可设置属性看官网)
          { name: "清远市", color: "red" },
        ],
        symbols: [                                          否
        //鼠标放上显示的名字   地图上面显示的扎点
        {
          name: "ships2",                   symbol   是  svg的图片路径      （官网显示可以添加图片路径，未成功暂时不确定原因）
          symbol: `path://M19,27A23.319,23.319,0,0,1,5.565,23.046C1.976,20.5,0,17.106,0,13.5s1.976-7,5.565-9.546A23.319,23.319,0,0,1,19,0,23.319,23.319,0,0,1,32.435,3.954C36.023,6.5,38,9.894,38,13.5s-1.976,7-5.565,9.546A23.319,23.319,0,0,1,19,27ZM19,1C9.075,1,1,6.607,1,13.5S9.075,26,19,26s18-5.608,18-12.5S28.925,1,19,1Z`,
        }]
      },
-->
<template>
  <div class="map2dClass" ref="map2d"></div>
</template>
<script>
export default {
  props: {
    city: Object,
    config: Object,
    mapData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    symbols: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      echart: null,
      key: null,
      options: {
        tooltip: {
          show: true,
          formatter: (params) => {
            return `<div style="position:absolute;left:0;top:0;width:8px;height:8px;background-color:#FD9A5A;"></div>
            <div class='tips' style="padding:0 12px;">
                <h1 style='font-size:16px;'>${params.name}</h1>
                <p style="font-size:14px;"><span style="opacity:0.75">${
                  params.data.num ? "数量 :" + params.data.num : ""
                }</span></p>
            </div>`;
          },
          borderColor: "#998484",
          borderWidth: 1,
          padding: [0, 0],
          backgroundColor: "#1B212B",
          borderRadius: 0,
        },
        geo: [],
        series: [],
      },
    };
  },
  created() {
    this.key = Object.keys(this.city)[0];
    this.optionMap(this.key);
    this.mapSeries();
  },
  mounted() {
    this.mapInit();
    let that = this;
    this.echart.on("click", function(d) {
      // that.echart.dispose();
      that.$nextTick(() => {
        console.log("zhix");
        that.options.geo = [];
        that.options.series = [];
        that.optionMap(d.name);
        that.mapSeries();
        var echarts = require("echarts");
        echarts.registerMap(d.name, that.city[d.name]);
        // that.echart = echarts.init(that.$refs.map2d);
        that.echart.setOption(that.options, true);
      });
    });
  },
  methods: {
    mapSeries() {
      let series = this.options.series;
      //对symbols  赋值
      if (this.symbols.length) {
        this.symbols.forEach((item) => {
          series.push({
            name: item.name ? item.name : "",
            type: "scatter",
            coordinateSystem: "geo",
            symbolSize: item.symbolSize ? item.symbolSize : 25,
            itemStyle: item.itemStyle ? item.itemStyle : { color: "#FFDB10" },
            symbolOffset: item.symbolOffset ? item.symbolOffset : 0,
            symbol: item.symbol ? item.symbol : "",
            data: item.data ? item.data : null,
          });
        });
      }
      series.map((item) => {
        //如果symblol 自己带有data进来那么不覆盖data
        //自带的data主要为了 如果地图上面不止一种标签的话  可以单独设置
        if (item.data === null) {
          item.data = this.mapData;
        }
        return item;
      });
    },
    optionMap(key) {
      //底层地图
      for (var i = 0; i < this.config.mapBg.length - 1; i++) {
        this.options.geo.push({
          map: key,
          itemStyle: {
            normal: {
              shadowColor: this.config.mapBg[i + 1],
              shadowOffsetX: this.config.bgOffsetX
                ? this.config.bgOffsetY * (i + 1)
                : 0,
              shadowOffsetY: this.config.bgOffsetY
                ? this.config.bgOffsetY * (i + 1)
                : 2 * (i + 1),
            },
          },
        });
      }
      //最上层地图
      this.options.geo.push({
        map: key,
        itemStyle: {
          normal: {
            borderColor: "#00ffff", //边界线颜色
            areaColor: this.config.mapBg[0], //默认区域颜色
          },
          emphasis: {
            areaColor: this.config.hoverColor
              ? this.config.hoverColor
              : "#3066ba", //鼠标滑过区域颜色    none 为不显示
          },
        },
        label: {
          //地图上面地图的样式
          emphasis: {
            //这个会比 normal 感觉层要高
            show: true, //开启悬浮事件
            color: "#FFF", //字体颜色
            fontSize: 12,
          },
        },
        regions: this.regions(),
      });
    },
    //单个区域设置样式设置
    regions() {
      if (this.config.regions !== undefined && this.config.regions.length > 0) {
        let regions = [];
        this.config.regions.map((item) => {
          regions.push({
            name: item.name,
            itemStyle: item.itemStyle
              ? item.itemStyle
              : {
                  // 单个区域的样式设置
                  color: item.color ? item.color : "#000",
                  opacity: 1,
                  borderWidth: 0.4,
                  borderColor: "#5F9EA0",
                },
          });
        });
        return regions;
      } else {
        return "";
      }
    },
    mapInit() {
      var echarts = require("echarts");
      echarts.registerMap(this.key, this.city[this.key]);
      this.echart = echarts.init(this.$refs.map2d);
      this.echart.setOption(this.options, true);
      // 监听地图绑定单击事件
    },
  },
};
</script>

<style>
.map2dClass {
  width: 100%;
  height: 100%;
}
</style>

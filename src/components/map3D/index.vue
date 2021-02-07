<template>
  <div id="main" ref="echart" style="width: 100%; height: 100%;"></div>
</template>

<script>
import "echarts-gl";
import nanShang from "../../assets/js/city/nanshang.json";
import shenzheng from "../../assets/js/city/shenzheng.json";
import longhua from "../../assets/js/city/longhua.json";
export default {
  data() {
    return {
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
      console.log(d, "我是总数据");
      const geoCoordMap = {
        点位1: [114.071, 22.61],
        点位2: [114.073, 22.63],
        点位3: [114.075, 22.63],
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
        console.log(res, ";;;;;;;;;;;;;;;;;");
        return res;
      };

      const iconLD =
        "path://M512 144.896c-141.312 0-256.512 115.2-256.512 256.512 0 178.688 164.864 372.224 227.328 445.44 9.728 11.776 15.872 18.944 18.432 22.528 2.56 3.584 6.656 5.632 10.752 5.632 3.584 0 7.168-1.536 9.728-4.096l1.024-1.024 0.512-1.024c2.048-3.072 7.68-9.728 18.944-23.04 61.952-73.728 226.816-268.8 226.816-444.416C768.512 260.096 653.312 144.896 512 144.896z m0 352.256c-52.736 0-95.744-43.008-95.744-95.744s43.008-95.744 95.744-95.744 95.744 43.008 95.744 95.744-43.008 95.744-95.744 95.744z";
      console.log(iconLD);
      const mapOption = {
        title: {
          // 标题
          top: "5%",
          text: "深圳市地图",
          subtext: "",
          x: "center",
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          // 提示框
          trigger: "item",
          formatter: function(params) {
            return params.name;
          },
        },

        geo3D: {
          map,
        },
        series: [
          {
            name: "电信",
            type: "custom", //配置显示方式为用户自定义
            coordinateSystem: "geo",
            renderItem: function(params, api) {
              console.log(params, api, "--------");
              //具体实现自定义图标的方法
              return {
                type: "image",
                style: {
                  image:
                    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg",
                  x: api.coordSys([114.071, 22.61])[0],
                  y: api.coordSys([114.071, 22.61])[1],
                },
              };
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
      this.echart = echarts.init(this.$refs.echart);
      this.echart.setOption(mapOption);
    },
    // initMap(name, size) {
    //   var echarts = require("echarts");
    //   echarts.registerMap(name, this.city[name]);
    //   let option = {
    //     // title: {
    //     //   // 标题
    //     //   top: "5%",
    //     //   text: "深圳市地图",
    //     //   subtext: "",
    //     //   x: "center",
    //     //   textStyle: {
    //     //     color: "#ccc",
    //     //   },
    //     // },

    //     // tooltip: {
    //     //   // 提示框
    //     //   trigger: "item",
    //     //   formatter: function(params) {
    //     //     return params.name;
    //     //   },
    //     // },

    //     series: [
    //       {
    //         type: "map3D", // 系列类型
    //         name: "map3D", // 系列名称
    //         map: name, // 地图类型。echarts-gl 中使用的地图类型同 geo 组件相同(ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。)
    //         regionHeight: 3,
    //         symbol:
    //           "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
    //         // 环境贴图，支持純颜色值，渐变色，全景贴图的 url。默认为 'auto'，在配置有 light.ambientCubemap.texture 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。
    //         environment: new echarts.graphic.LinearGradient(
    //           0,
    //           0,
    //           0,
    //           1,
    //           [
    //             {
    //               // 配置为垂直渐变的背景
    //               offset: 0,
    //               color: "#00aaff", // 天空颜色
    //             },
    //             {
    //               offset: 0.7,
    //               color: "#998866", // 地面颜色
    //             },
    //             {
    //               offset: 1,
    //               color: "#998866", // 地面颜色
    //             },
    //           ],
    //           false
    //         ),

    //         // label: {
    //         //   // 标签的相关设置
    //         //   show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
    //         //   //distance: 50,               // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
    //         //   //formatter:,               // 标签内容格式器
    //         //   textStyle: {
    //         //     // 标签的字体样式
    //         //     color: "#000", // 地图初始化区域字体颜色
    //         //     fontSize: 18, // 字体大小
    //         //     opacity: 1, // 字体透明度
    //         //     backgroundColor: "rgba(0,23,11,0)", // 字体背景色
    //         //   },
    //         // },

    //         // itemStyle: {
    //         //   // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
    //         //   color: "rgba(95,158,160,0.5)", // 地图板块的颜色
    //         //   opacity: 1, // 图形的不透明度 [ default: 1 ]
    //         //   borderWidth: 0.5, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
    //         //   borderColor: "red", // 图形描边的颜色。[ default: #333 ]
    //         // },

    //         // emphasis: {
    //         //   // 鼠标 hover 高亮时图形和标签的样式 (当鼠标放上去时  label和itemStyle 的样式)
    //         //   label: {
    //         //     // label高亮时的配置
    //         //     show: true,
    //         //     textStyle: {
    //         //       color: "#fff", // 高亮时标签颜色变为 白色
    //         //       fontSize: 15, // 高亮时标签字体 变大
    //         //     },
    //         //   },
    //         //   itemStyle: {
    //         //     // itemStyle高亮时的配置
    //         //     areaColor: "#66ffff", // 高亮时地图板块颜色改变
    //         //   },
    //         // },

    //         // groundPlane: {
    //         //   // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
    //         //   show: false, // 是否显示地面。[ default: false ]
    //         //   color: "#aaa", // 地面颜色。[ default: '#aaa' ]
    //         // },

    //         // regions: [
    //         //   {
    //         //     // 可对单个地图区域进行设置
    //         //     name: "南山区", // 所对应的地图区域的名称
    //         //     //regionHeight: '',			// 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
    //         //     itemStyle: {
    //         //       // 单个区域的样式设置
    //         //       color: "red",
    //         //       opacity: 1,
    //         //       borderWidth: 0.4,
    //         //       borderColor: "#5F9EA0",
    //         //     },
    //         //   },
    //         //   {
    //         //     name: "龙华区",
    //         //     itemStyle: {
    //         //       color: "#EEEE00",
    //         //       opacity: 1,
    //         //       borderWidth: 0.4,
    //         //       borderColor: "#5F9EA0",
    //         //     },
    //         //   },
    //         // ],

    //         //shading: 'lambert',       // 三维地理坐标系组件中三维图形的着色效果，echarts-gl 中支持下面三种着色方式:
    //         // 'color' 只显示颜色，不受光照等其它因素的影响。
    //         // 'lambert' 通过经典的 lambert 着色表现光照带来的明暗。
    //         // 'realistic' 真实感渲染，配合 light.ambientCubemap 和 postEffect 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了基于物理的渲染（PBR） 来表现真实感材质。
    //         // realisticMaterial: {}    // 真实感材质相关的配置项，在 shading 为'realistic'时有效。
    //         // lambertMaterial: {}      // lambert 材质相关的配置项，在 shading 为'lambert'时有效。
    //         // colorMaterial: {}        // color 材质相关的配置项，在 shading 为'color'时有效。

    //         // light: {
    //         //   // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
    //         //   main: {
    //         //     // 场景主光源的设置，在 globe 组件中就是太阳光。
    //         //     color: "#fff", //主光源的颜色。[ default: #fff ]
    //         //     intensity: 1.2, //主光源的强度。[ default: 1 ]
    //         //     shadow: false, //主光源是否投射阴影。默认关闭。    开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。
    //         //     //shadowQuality: 'high',      // 阴影的质量。可选'low', 'medium', 'high', 'ultra' [ default: 'medium' ]
    //         //     alpha: 55, // 主光源绕 x 轴，即上下旋转的角度。配合 beta 控制光源的方向。[ default: 40 ]
    //         //     beta: 10, // 主光源绕 y 轴，即左右旋转的角度。[ default: 40 ]
    //         //   },
    //         //   ambient: {
    //         //     // 全局的环境光设置。
    //         //     color: "#fff", // 环境光的颜色。[ default: #fff ]
    //         //     intensity: 0.5, // 环境光的强度。[ default: 0.2 ]
    //         //   },
    //         // },
    //         // viewControl: {
    //         //   distance: size, // [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
    //         //   minDistance: 40, // [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
    //         //   maxDistance: 400, // [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。

    //         //   alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
    //         //   beta: 15, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
    //         //   minAlpha: -360, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
    //         //   maxAlpha: 360, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
    //         //   minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
    //         //   maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]

    //         //   center: [0, 0, 0], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。

    //         //   animation: false, // 是否开启动画。[ default: true ]
    //         //   animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
    //         //   animationEasingUpdate: "cubicInOut", // 过渡动画的缓动效果。[ default: cubicInOut ]
    //         // },

    //         // data: [
    //         //   {
    //         //     // 可对单个地图区域进行设置
    //         //     name: "龙华区", // 所对应的地图区域的名称
    //         //     //regionHeight: '',			// 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
    //         //     itemStyle: {
    //         //       // 单个区域的样式设置
    //         //       color: "#00FF00",
    //         //       opacity: 1,
    //         //       borderWidth: 0.4,
    //         //       borderColor: "#5F9EA0",
    //         //     },
    //         //   },
    //         //   {
    //         //     name: "南山区",
    //         //     itemStyle: {
    //         //       color: "#EEEE00",
    //         //       opacity: 1,
    //         //       borderWidth: 0.4,
    //         //       borderColor: "#5F9EA0",
    //         //     },
    //         //   },
    //         // ],
    //       },
    //     ],
    //   };
    //   this.echart = echarts.init(this.$refs.echart);
    //   this.echart.setOption(option);
    //   console.log(size);
    // },
  },
};
</script>

<style></style>

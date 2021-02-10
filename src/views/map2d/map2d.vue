<template>
  <div style="display:flex;">
    <div style="width: 400px; height: 400px;background:#151834;">
      <Map2d
        :city="city"
        :config="config"
        :mapData="data"
        :symbols="symbols"
      ></Map2d>
    </div>
    <div
      style="width: 400px; height: 400px;background:#151834;margin-left:30px;"
    >
      <Map2d_2 :city="city"></Map2d_2>
    </div>
  </div>
</template>
<script>
import Map2d_2 from "@/components/map2d/map2d_2.vue";
import guangdong from "@/assets/js/city/guangdong.json";
import shenZhen from "@/assets/js/city/shenzheng.json";
// import longhua.json from "@/assets/js/city/longhua.json.json";
import Map2d from "@/components/map2d/map2d.vue";
export default {
  components: {
    Map2d,
    Map2d_2,
  },
  methods: {},
  mounted() {
    // console.log(Longgang, "Longgang");
  },
  data() {
    return {
      echart: null,
      city: {
        广东: guangdong, //地图的json数据
        深圳市: shenZhen,
        // 龙岗区: Longgang,
      },
      config: {
        // hoverColor: "red",
        mapBg: ["#09295b", "#2AF8FB", "#2AF8FB"], //第一个颜色是最上层的颜色//最少一个颜色
        bgOffsetX: 0, //底层地图x轴偏移
        bgOffsetY: 0, //底层地图y轴偏移
        regions: [
          //需要高亮的区域姓名和颜色  如果需要设置区域 颜色 边框的样式那么可以不要 color  设置 添加 itemStyle 设置其他属性(可设置属性看官网)
          { name: "云浮市", color: "#000" },
          { name: "清远市", color: "red" },
          { name: "江门市", color: "#ccc" },
        ],
      },
      symbols: [
        //鼠标放上显示的名字   地图上面显示的扎点
        {
          name: "ships2",
          symbol: `path://M19,27A23.319,23.319,0,0,1,5.565,23.046C1.976,20.5,0,17.106,0,13.5s1.976-7,5.565-9.546A23.319,23.319,0,0,1,19,0,23.319,23.319,0,0,1,32.435,3.954C36.023,6.5,38,9.894,38,13.5s-1.976,7-5.565,9.546A23.319,23.319,0,0,1,19,27ZM19,1C9.075,1,1,6.607,1,13.5S9.075,26,19,26s18-5.608,18-12.5S28.925,1,19,1Z`,
        },
        {
          name: "ships2",
          symbolSize: 15,
          symbol: `path://M19,27A23.319,23.319,0,0,1,5.565,23.046C1.976,20.5,0,17.106,0,13.5s1.976-7,5.565-9.546A23.319,23.319,0,0,1,19,0,23.319,23.319,0,0,1,32.435,3.954C36.023,6.5,38,9.894,38,13.5s-1.976,7-5.565,9.546A23.319,23.319,0,0,1,19,27ZM19,1C9.075,1,1,6.607,1,13.5S9.075,26,19,26s18-5.608,18-12.5S28.925,1,19,1Z`,
        },
        {
          name: "ships2",
          symbolOffset: [0, -15],
          symbolSize: [10, 30],
          symbol: `path://M2,23.5,0-2H7L5,23.5a1.5,1.5,0,0,1-3,0Z`,
        },
      ],
      data: [
        {
          name: "点位1",
          value: [115.671, 23.1],
        },
        {
          name: "点位2",
          num: "123",
          value: [113.373, 22.64],
        },
        {
          name: "点位3",
          value: [114.275, 23.67],
          num: "123",
        },
        {
          name: "点位4",
          value: [116.07, 23.58],
          num: "123",
        },
        {
          name: "点位5",
          value: [114.472, 23.1],
          num: "123",
        },
      ],
    };
  },
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
}
</style>

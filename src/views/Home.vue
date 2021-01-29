<template>
  <div class="content">
    <div><Echart :option="data"></Echart></div>
    <!-- <div>
      <Echart :option="option"></Echart>
    </div>
    <div><Echart :option="pie" :isAxisChart="false"></Echart></div>
    <div><Echart :option="option2"></Echart></div> -->
    <Highcharts></Highcharts>
  </div>
</template>

<script>
import Echart from "../components/echart/echatr.vue";
import Highcharts from "../components/Highcharts/pie";
export default {
  components: {
    Echart,
    Highcharts,
  },
  created() {
    let keyArray = Object.keys(this.dataList[0]);
    keyArray.forEach((key, index) => {
      this.data.series.push({
        name: key,
        data: this.dataList.map((item) => {
          return item[key];
        }),
        color: this.color[index],
      });
    });
    this.data.title = "月";
  },
  data() {
    return {
      dataList: [
        { 删除: "123", 新增: "134" },
        { 删除: "133", 新增: "334" },
        { 删除: "153", 新增: "264" },
        { 删除: "113", 新增: "274" },
      ],
      color: ["#01FFFF", "red"],
      data: {
        xData: ["1月", "2月", "3月", "4月"],
        series: [],
      },
      option: {
        xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        // title: "标题",
        // width:25,
        series: [
          // {
          //   color: "#01FFFF",
          //   name: "新增",
          //   data: ["1030", "205", "84", "568", "689", "457"],
          // },
          {
            color: "#1C68FF",
            // name: "删除",
            data: ["100", "102", "114", "268", "68", "257", "400"],
          },
        ],
        XYColor: "red",
        titleColor: "#000",
      },
      option2: {
        xData: ["1", "2", "3", "4", "5", "6"],
        width: 20,
        series: [
          {
            color: "red",
            name: "新增测试",
            data: ["130", "205", "108", "568", "689", "457"],
          },
          {
            color: "#000",
            name: "新增测试1",
            data: ["130", "205", "18", "568", "689", "457"],
          },
          {
            color: "#1C68FF",
            name: "删除",
            data: ["100", "122", "114", "268", "68", "257"],
          },
          {
            color: "#ccc",
            name: "编辑",

            data: ["100", "122", "142", "282", "82", "227"],
          },
        ],
        XYColor: "#000",
      },
      option1: {
        xData: ["1", "2", "3", "4", "5", "6"],
        title: "标题测试",
        series: [
          {
            color: "#ccc",
            name: "删除",
            data: ["100", "122", "114", "268", "68", "257"],
          },
          {
            color: "#1C68FF",
            name: "编辑",
            data: ["1002", "1222", "1142", "2682", "682", "2527"],
          },
        ],
        XYColor: "#000",
      },
      pie: {
        legend: {
          // orient: "vertical",
          // left: "left",
          // data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        series: [
          {
            name: "客户访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "西宁", itemStyle: { color: "#0bebf9" } },
              { value: 310, name: "海东", itemStyle: { color: "#07bcf8" } },
              { value: 400, name: "海北", itemStyle: { color: "#f488f2" } },
              { value: 235, name: "海南", itemStyle: { color: "#fcf367" } },
              { value: 274, name: "果洛", itemStyle: { color: "#fcf912" } },
              { value: 258, name: "玉树", itemStyle: { color: "#fa14c6" } },
              { value: 280, name: "海西", itemStyle: { color: "#184dfa" } },
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            //饼状图的外围标签
            label: {
              normal: {
                textStyle: {
                  color: "rgba(0, 0, 0, 0.3)",
                },
              },
            },
            //指向外围标签的线条
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(0, 0, 255, 0.3)",
                },
                smooth: 0.2,
                length: 10,
                length2: 20,
              },
            },
            itemStyle: {
              normal: {
                //具体决定了饼状图每一份的颜色显示
                color: "#FFA07A",
                //饼状图阴影，值越大阴影亮度越高
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },

            animationType: "scale",
            animationEasing: "elasticOut",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 60vh;
  justify-content: space-around;
  > div {
    width: 40%;
    height: 60%;
    // background: violet;
  }
}
</style>

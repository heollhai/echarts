<template>
  <div class="content">
    <div style="background:violet;padding:40px;">
      <Echart :option="option"></Echart>
    </div>
    <div><Echart :option="option1"></Echart></div>
    <div><Echart :option="pie" :isAxisChart="false"></Echart></div>
    <div><Echart :option="option2"></Echart></div>
  </div>
</template>

<script>
import Echart from "../components/echart/echatr.vue";
export default {
  components: {
    Echart,
  },
  data() {
    return {
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
        title: {
          text: "测试",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
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

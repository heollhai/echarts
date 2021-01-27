<template>
  <div class="content">
   <div> <Echart :option="option"></Echart></div>
    <div><Echart :option="pie" :isAxisChart = "false"></Echart></div>
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
        xData: ["可研数据", "测试2", "测试3", "测试4", "测试5", "测试6"],
        series:["1030", "205", "84", "568", "689", "4587"],
        // colorList : [ "#C1232B", "#B5C334","#FCCE10","#E87C25","#27727B", "#FE8463","#9BCA63", "#FAD860", ]
      },
      pie: {
          title: {
            text: "某站点用户访问来源",
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
              // emphasis: {
              //   itemStyle: {
              //     shadowBlur: 10,
              //     shadowOffsetX: 0,
              //     shadowColor: "rgba(0, 0, 0, 0.5)"
              //   }
              // }
            },
          ],
        },
    };
  },
};
</script>

<style lang="scss" scoped>
.content{
  display: flex;width: 100%;height: 50vh;
  justify-content: space-around;
  >div{
    width:40%;
  }
}
</style>

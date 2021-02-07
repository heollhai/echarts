<template>
  <div class="content">
    <!-- <button @click="newData">点击改变数据</button> -->
    <div class="one"><Echart :option="data"></Echart></div>
    <div>
      <Echart :option="option"></Echart>
    </div>
    <!-- <div><Echart :option="pie" :isAxisChart="false"></Echart></div> -->
    <div><Echart :option="option2"></Echart></div>
    <div><Echart :option="option1"></Echart></div>
    <!-- <div><Highcharts :id="id" :option="optionss"></Highcharts></div> -->
  </div>
</template>

<script>
import Echart from "../components/echart/echatr.vue";
// import Highcharts from "../components/Highcharts/pie";
export default {
  components: {
    Echart,
    // Highcharts,
  },
  methods: {
    newData() {
      this.$set(this.data.series[0].data, 0, 445);
    },
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
      //柱状图1
      dataList: [
        { 删除: "123", 新增: "134" },
        { 删除: "133", 新增: "334" },
        { 删除: "153", 新增: "264" },
        { 删除: "113", 新增: "274" },
      ],
      color: ["#017AFE", "#00FFFE"],
      data: {
        width: 15, //宽
        XYColor: "#fff", //默认黑色
        xData: ["1月", "2月", "3月", "4月"], //x轴
        series: [],
      },

      //柱状图2
      option: {
        xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        // title: "标题",
        // width:25,
        series: [
          {
            color: "#1C68FF",
            // name: "删除",
            data: ["100", "102", "114", "268", "68", "257", "400"],
          },
        ],
        XYColor: "red",
        titleColor: "#000",
      },
      //柱状图3
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
      //柱状图4
      option1: {
        width: 20,
        xData: ["1", "2", "3", "4", "5", "6"],
        title: "标题测试",
        series: [
          {
            color: "#ccc",
            name: "删除",
            data: ["100", "122", "114", "268", "68", "257"],
          },
          {
            color: "#239763",
            name: "删除",
            data: ["1003", "1224", "1124", "2368", "618", "2527"],
          },
          {
            color: "#1C68FF",
            name: "编辑",
            data: ["1002", "1222", "1142", "2682", "682", "2527"],
          },
        ],
        XYColor: "#000",
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
    background: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg")
      no-repeat;
    background-size: 100% 100%;
  }
  .one {
  }
}
</style>

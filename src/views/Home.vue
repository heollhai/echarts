<template>
  <div class="content">
    <!-- <button @click="newData">点击改变数据</button> -->
    <div><Echart :option="data"></Echart></div>
    <div>
      <Echart :option="option"></Echart>
    </div>
    <!-- <div><Echart :option="pie" :isAxisChart="false"></Echart></div> -->
    <div><Echart :option="option2"></Echart></div>
    <div><Highcharts :id="id" :option="optionss"></Highcharts></div>
    
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
  methods:{
    newData(){
      console.log(this.data.series[0].data,'this.dataList----')
      this.$set(this.data.series[0].data,0,445)
      console.log(this.data.series[0].data,'this.dataList')
      // dataList: [
      //   { 删除: "123", 新增: "134" },
      //   { 删除: "133", 新增: "334" },
      //   { 删除: "153", 新增: "264" },
      //   { 删除: "113", 新增: "274" },
      // ],
    }
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
      id: "test",
      optionss: {
        colors: [
          "#c73e6a",
          "#e192a8",
          "#ff8b4e",
          "#fbd884",
          "#08b170",
          "#00b6e8",
          "#8d7ce4",
        ],
        chart: {
          backgroundColor: null,
          type: "pie", //饼图
          options3d: {
            enabled: true, //使用3d功能
            alpha: 60, //延y轴向内的倾斜角度
            beta: 0,
          },
        },
        title: {
          text: "重点事件比例分布", //图表的标题文字
          style: {
            color: "#fff",
          },
          align: "left",
        },
        plotOptions: {
          pie: {
            size: "80%",
            innerSize: 180, //环状图中间圆环的大小
            allowPointSelect: true, //每个扇块能否选中
            cursor: "pointer", //鼠标指针
            depth: 15, //饼图的厚度
            dataLabels: {
              enabled: true, //是否显示饼图的线形tip
            },
          },
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            type: "pie",
            // size: '80%',
            // name: "测试用1", //统一的前置词,非必须
            data: [
              {
                y: 2,
                color: "rgba(0,0,0, 0)",
                dataLabels: {
                  enabled: false, //是否显示饼图的线形tip
                },
              },
              ["待接收", 12], //模块名和所占比，也可以{name: '测试1',y: 12}
              {
                y: 2,
                color: "rgba(0,0,0, 0)",
                dataLabels: {
                  enabled: false, //是否显示饼图的线形tip
                },
              },
              {
                name: "待派遣",
                y: 23,
                color: {
                  fillOpacity: 0.6,
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0 },
                  stops: [
                    [0, "#8d7ce4"],
                    [1, "#8d7ce4"],
                  ],
                },
              },
              {
                y: 2,
                color: "rgba(0,0,0, 0)",
                dataLabels: {
                  enabled: false, //是否显示饼图的线形tip
                },
              },
              {
                name: "待处理",
                y: 19,
                color: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0 },
                  stops: [
                    [0, "#08b170"],
                    [1, "#08b170"],
                  ],
                },
              },
              {
                y: 2,
                color: "rgba(0,0,0, 0)",
                dataLabels: {
                  enabled: false, //是否显示饼图的线形tip
                },
              },
              {
                name: "已废弃",
                y: 29,
                color: {
                  // fillOpacity: 0.6,
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0 },
                  stops: [
                    [0, "#fbd884"],
                    [1, "#fbd884"],
                  ],
                },
              },
              {
                y: 2,
                color: "rgba(0,0,0, 0)",
                dataLabels: {
                  enabled: false, //是否显示饼图的线形tip
                },
              },
              {
                name: "已废弃",
                y: 29,
                color: {
                  // fillOpacity: 0.6,
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0 },
                  stops: [
                    [0, "red"],
                    [1, "red"],
                  ],
                },
              },
              {
                y: 2,
                color: "rgba(0,0,0, 0)",
                dataLabels: {
                  enabled: false, //是否显示饼图的线形tip
                },
              },
              {
                name: "已结案",
                y: 29,
                color: {
                  fillOpacity: 0.6,
                  linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                  stops: [
                    [0, "#ff8b4e"],
                    [1, "#ff8b4e"],
                  ],
                },
              },
              {
                y: 2,
                color: "rgba(0,0,0, 0)",
                dataLabels: {
                  enabled: false, //是否显示饼图的线形tip
                },
              },
              {
                name: "待延期审核",
                y: 29,
                color: {
                  // fillOpacity: 0.05,
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0 },
                  stops: [
                    [0, "rgba(14,236,248,0.99)"],
                    [1, "rgba(14,236,248,0.99)"],
                  ],
                },
              },
            ],
          },
        ],
      },



      //下面是饼图的数据
      //饼图1
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
      //饼图2
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
      //饼图3
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
      //饼图4
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

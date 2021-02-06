<template>
  <div class="D3" ref="D3">
    <D3_4 :dataList="dataList" :color="color" :config="config"></D3_4>
    <!-- <Rectangle style="width:400px;height:400px;"></Rectangle> -->
    <!-- <div class="iconfont icon-zu6199"></div> -->
  </div>
</template>

<script>
// import Rectangle from "@/components/d3/rectangle.vue";
import D3_4 from "@/components/d3/pyramid_4.vue";
export default {
  mounted() {
    window.addEventListener("resize",this.sizeTo)
  },
  components: {
    D3_4,
    // Rectangle
  },
  methods: {
    sizeTo() {
      this.config.width = this.$refs.D3.offsetWidth;
      this.config.height = this.$refs.D3.offsetHeight;
    console.log(this.config.height, this.config.width, "this.$refs.D3");

    },
  },
  data() {
    return {
      config: {
        id: "svg8",
        width: 400,
        height: 400,
        TriangleWidth: 30, //暂时代表所有的宽度
        polygonGap: 35, //每个多边形的间隙
        polygonHeight: 35, //多边形高度
      },
      color: [
        "#6F00D2",
        "red",
        "#FF77FF",
        "#ffaad5",
        "#00E3E3",
        "#2828FF",
        "#6F00D2",
        "red",
      ],
      dataList: [
        { nama: "火灾21321321", num: "40" },
        { nama: "消防", num: "60" },
        { nama: "刑事案件", num: "10" },
        { nama: "一般事件", num: "30" },
        { nama: "2号", num: "30" },
        { nama: "19号", num: "44" },
        { nama: "2号", num: "34" },
        { nama: "2号", num: "54" },
        // { nama: "2号", num: "6454" },
        // { nama: "2号", num: "623" },
        // { nama: "2号", num: "62" },
        // { nama: "2号", num: "64" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.D3 {
  height: 45vh;
  width: 50vh;
  background: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg");
}
</style>

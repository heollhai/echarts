<template>
  <div class="D3" ref="D3">
    <D3_4
      v-if="Type"
      :dataList="dataList"
      :color="color"
      :config="config"
    ></D3_4>
  </div>
</template>
<script>
import D3_4 from "@/components/d3/pyramid_4.vue";
export default {
  mounted() {
    window.addEventListener("resize", this.sizeTo);
    this.sizeTo();
  },
  components: {
    D3_4,
  },
  methods: {
    //窗口大小改变
    sizeTo() {
      this.$set(this.config, "width", this.$refs.D3.offsetWidth);
      this.$set(this.config, "height", this.$refs.D3.offsetHeight);
      this.Type = false;
      this.$nextTick(() => {
        this.Type = true;
      });
    },
  },
  data() {
    return {
      Type: true,
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
        "#6E90A2",
      ],
      dataList: [
        { name: "火灾事件1231aw", num: "40" },
        { name: "消防事件", num: "60" },
        { name: "刑事案件", num: "10" },
        { name: "一般事件", num: "30" },
        { name: "测试事件", num: "30" },
        { name: "A事件", num: "44" },
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
  background-size: 100% 100%;
}
</style>

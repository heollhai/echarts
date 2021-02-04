<template>
  <div class="abc">
    <D3></D3>
  </div>
</template>

<script>
// import * as d3 from "d3";
import D3 from "../components/d3/pyramid";

export default {
  components: {
    D3,
  },
};
</script>

<style lang="scss">
.abc {
  width: 400px;
  height: 400px;
  margin: auto;
  background: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg")
    no-repeat;
  background-size: 100% 100%;
  // position: absolute;
  // left: 150px;
}
</style>

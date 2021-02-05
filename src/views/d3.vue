<template>
  <div class="abc">
    <!-- <D3></D3> -->
    <!-- <hr /> -->
    <D3_2 class="dingwei" ref="resss"></D3_2>

    <div class="abcd iconfont icon-zu6199" style=""></div>
    <div class="test ">
      <D3_3></D3_3>
    </div>
  </div>
</template>

<script>
// import * as d3 from "d3";
// import D3 from "../components/d3/pyramid";
import D3_3 from "../components/d3/pyramid_3";
import D3_2 from "../components/d3/pyramid_2";

export default {
  components: {
    // D3,
    D3_2,
    D3_3,
  },
};
</script>

<style lang="scss">
.abc {
  width: 800px;
  height: 500px;
  // background: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg")
  // no-repeat;
  background-size: 100% 100%;
  display: flex;
  position: relative;
  .dingwei {
    flex: 1;
    transform: scale(1);
  }
  .test {
    position: absolute;
    right: -100px;
    width: 500px;
    height: 500px;
    border: 1px saddlebrown solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .abcd {
    // font-size: 287px;
    // position: absolute;
    // top: 128px;
    // right: -207px;
  }
}
</style>

<template>
  <div class="map3d">
    <Map3d></Map3d>
    <!-- <Histogram></Histogram> -->
    <ScatterGL></ScatterGL>
  </div>
</template>

<script>
import Map3d from "@/components/map3D/index.vue";
import ScatterGL from "@/components/scatterGLtest/scatterGL.vue";
// import Histogram from "@/components/map3D/mapHistogram.vue";
export default {
  components: {
    Map3d,
    ScatterGL,
    // Histogram,
  },
};
</script>

<style>
.map3d {
  height: 400px;
}
</style>

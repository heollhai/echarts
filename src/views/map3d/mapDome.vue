<template>
  <div>
    map dome<MapDome></MapDome>
    <BarMapDemo></BarMapDemo>
  </div>
</template>

<script>
import MapDome from "@/components/map3D/mapDome.vue";
import BarMapDemo from "@/components/map3D/barMapDemo.vue";
export default {
  components: {
    MapDome,
    BarMapDemo,
  },
};
</script>

<style></style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Echarts</router-link> |
      <!-- <router-link to="/about">About</router-link> |
      <router-link to="/d32">d32</router-link> | -->
      <router-link to="/amcharts">amcharts</router-link> |
      <!-- <router-link to="/pyramid">pyramid</router-link> | -->
      <!-- <router-link to="/d3">d3</router-link> | -->
      <router-link to="/d3test">d3test</router-link> |
      <router-link to="/map3D">map3D</router-link> |
      <router-link to="/mapDome">mapDome</router-link> |
      <router-link to="/map2d">map2d</router-link> |
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

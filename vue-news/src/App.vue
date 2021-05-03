<template>
  <div id="app">
    <gnb-header></gnb-header>
    <router-view></router-view>
  </div>
</template>

<script>
import GnbHeader from "./components/GnbHeader.vue"

export default {
  components: {
    GnbHeader
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>

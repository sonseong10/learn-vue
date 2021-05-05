<template>
  <div id="app">
    <gnb-header></gnb-header>
    <transition name="page">
      <router-view></router-view>
    </transition>
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
  font-family: "Roboto", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
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

dl,
dd {
  margin: 0;
}

small {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
}

a {
  text-decoration: none;
  color: #000;
}

p {
  margin: 0;
}

.container {
  max-width: 1040px;
  margin: 0 auto;
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

/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

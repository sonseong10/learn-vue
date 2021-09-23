<template>
  <div id="app">
    <gnb-header></gnb-header>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="spinnerStatus"></spinner>
  </div>
</template>

<script>
import GnbHeader from "./components/GnbHeader.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus";

export default {
  components: {
    GnbHeader,
    Spinner,
  },
  data() {
    return {
      spinnerStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.spinnerStatus = true;
    },
    endSpinner() {
      this.spinnerStatus = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
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
  color: #1d1d1d;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
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

<template>
  <div>
    <div v-for="item in fetchedNews" v-bind:key="item.title">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(["fetchedNews"])
  },
  created() {
    this.$store.dispatch("FETCH_NEWS")
  }
}
</script>

<style></style>

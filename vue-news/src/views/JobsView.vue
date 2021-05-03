<template>
  <div>
    <div v-for="item in fetchedJobs" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(["fetchedJobs"])
  },
  created() {
    this.$store.dispatch("FETCH_JOBS")
  }
}
</script>

<style></style>

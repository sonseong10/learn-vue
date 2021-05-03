<template>
  <div>
    <P>name : {{ fetchedUser.id }}</P>
    <P>karma : {{ fetchedUser.karma }}</P>
    <P>created : {{ fetchedUser.created }}</P>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["fetchedUser"])
  },
  created() {
    const params = this.$route.params.id
    this.$store.dispatch("FETCH_USER", params)
  }
}
</script>

<style></style>

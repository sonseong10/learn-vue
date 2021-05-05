<template>
  <user-profile>
    <template slot="username">
      <span class="deco">Name</span> {{ fetchedUser.id }}
    </template>
    <template slot="created">
      <span class="deco">created</span>{{ fetchedUser.created }}
    </template>
    <template slot="karma">
      <span class="deco">karma</span>{{ fetchedUser.karma }}
    </template>
  </user-profile>
</template>

<script>
import { mapGetters } from "vuex"
import UserProfile from "../components/UserProfile.vue"

export default {
  components: { UserProfile },

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

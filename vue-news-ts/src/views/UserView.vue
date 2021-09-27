<template>
  <user-profile>
    <template slot="username">
      <span class="visually" aria-hidden>Name</span>
      {{ fetchedUser.id }}
    </template>
    <template slot="created">
      <span class="visually" aria-hidden>created</span>
      {{ fetchedUser.created }}
    </template>
    <template slot="karma">
      <span class="visually" aria-hidden>karma</span>
      {{ fetchedUser.karma }}
    </template>
  </user-profile>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
import bus from "@/utils/bus";

export default {
  components: { UserProfile },
  created() {
    bus.$emit("end:spinner");
  },
  computed: {
    ...mapGetters(["fetchedUser"]),
  },
};
</script>

<style></style>

<template>
  <div>
    <section class="container">
      <h1 class="contents-title">{{ fetchedItem.title }}</h1>
      <user-profile>
        <template slot="username">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
        </template>
        <template slot="created">
          {{ fetchedItem.time_ago }}
        </template>
      </user-profile>
      <P class="contents" v-html="fetchedItem.content"></P>
    </section>
    <section></section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const params = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", params);
  },
};
</script>

<style scoped>
.user-info {
  margin-bottom: 1em;
}

.user-name {
  margin: 0 8px;
}

.contents {
  padding: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
}
</style>

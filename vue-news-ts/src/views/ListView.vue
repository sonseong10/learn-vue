<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchNews, NewsItem } from "@/service/api/news-api";
import ListItem from "@/components/ListItem.vue";

export default Vue.extend({
  components: { ListItem },

  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },

  methods: {
    async fetchNewsItems() {
      const { data } = await fetchNews();
      this.newsItems = data;
    },
  },

  created() {
    this.fetchNewsItems();
  },
});
</script>

<style></style>

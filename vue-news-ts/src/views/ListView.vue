<template>
  <div>
    <ListItem :items="listItems" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AskItem, fetchList, JobsItem, NewsItem } from "@/service/api/news-api";
import ListItem from "@/components/ListItem.vue";

export default Vue.extend({
  components: { ListItem },

  data() {
    return {
      listItems: [] as NewsItem[] | JobsItem[] | AskItem[],
    };
  },

  methods: {
    async fetchListItems() {
      const { data } = await fetchList(this.$route.name?.toString());
      this.listItems = data;
    },
  },

  created() {
    this.fetchListItems();
  },
});
</script>

<style></style>

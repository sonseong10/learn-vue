<template>
  <section class="container">
    <h1 class="visually-hidden">News List</h1>
    <ul class="list">
      <li v-for="item in items" v-bind:key="item.id">
        <template v-if="item.domain">
          <a class="list-item" :href="item.url">
            <strong class="comments-count">{{ item.points || 0 }}</strong>
            <div>
              <h2 class="title">{{ item.title }}</h2>
              <small class="user-info">
                <router-link
                  class="info-link"
                  v-if="item.user"
                  :to="`/user/${item.user}`"
                >
                  {{ item.user }}
                </router-link>
                <a class="info-link" v-else :href="item.url">
                  {{ item.domain }}
                </a>
                <p class="term">{{ item.time_ago }}</p>
              </small>
            </div>
          </a>
        </template>
        <template v-else>
          <router-link class="list-item" :to="`item/${item.id}`">
            <strong class="comments-count">{{ item.points || 0 }}</strong>
            <div>
              <h2 class="title">{{ item.title }}</h2>
              <small class="user-info">
                <router-link class="info-link" :to="`/user/${item.user}`">
                  {{ item.user }}
                </router-link>
                <p class="term">{{ item.time_ago }}</p>
              </small>
            </div>
          </router-link>
        </template>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { NewsItem } from "@/service/api/news-api";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<NewsItem[]>,
      required: true,
    },
  },

  computed: {
    listOptions(): any {
      return this.$store.getters.fetchedList;
    },
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
}

h2 {
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px;
  border-bottom: 1px solid #f2f2f2;
  transition: background-color 300ms ease-in-out;
}

.list-item:hover {
  background-color: #f7f7f7;
}

.comments-count {
  display: inline-block;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  line-height: 52px;
  color: #42b883;
  text-align: center;
}

.title {
  font-size: 18px;
  color: #1d1d1d;
  transition: color 300ms ease-in-out;
}

.user-info {
  color: #666;
}

.info-link {
  color: #666;
  transition: color 300ms ease-in-out;
}

.term::before {
  margin: 0 4px;
  content: "-";
}

.list-item:hover .title,
.info-link:hover {
  color: #42b883;
  text-decoration: underline;
}
</style>

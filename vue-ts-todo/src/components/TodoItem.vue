<template>
  <li>
    <p>{{ todoItem }}</p>
    <button type="button" @click="removeItem">X</button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Todo } from '@/App.vue';

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  methods: {
    removeItem() {
      this.$emit('remove', this.index);
    },
  },
});
</script>

<style scoped></style>

<template>
  <li>
    <p @click="toggleItem" :class="todoItemClass">
      {{ todoItem.title }}
    </p>
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
  computed: {
    todoItemClass(): string | null {
      return this.todoItem.completed ? 'complete' : null;
    },
  },
  methods: {
    toggleItem() {
      this.$emit('toggle', this.todoItem, this.index);
    },
    removeItem() {
      this.$emit('remove', this.index);
    },
  },
});
</script>

<style scoped></style>

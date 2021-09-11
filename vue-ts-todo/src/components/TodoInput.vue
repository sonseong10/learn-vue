<template>
  <div>
    <label for="todo-input">입력</label>
    <input id="todo-input" type="text" @input="handleOnTodo" />
    <button @click="addTodo" type="button">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['todoValue', 'addTodoItem'],
  methods: {
    handleOnTodo(event: any) {
      event.target.value;
      this.$emit('input', event.target.value);
    },
    addTodo() {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>

<template>
  <div>
    <label for="todo-input">입력</label>
    <input
      id="todo-input"
      type="text"
      :value="todoValue"
      @input="handleOnTodo"
    />
    <button @click="addTodo" type="button">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    todoValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleOnTodo(event: InputEvent) {
      const eventTarget = event.target as HTMLInputElement;
      this.$emit('input', eventTarget.value);
    },
    addTodo() {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>

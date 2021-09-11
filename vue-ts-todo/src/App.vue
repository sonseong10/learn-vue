<template>
  <div>
    <h1>Vue Todo with TypeScript</h1>
    <TodoInput
      :todoValue="todoText"
      @input="observerInput"
      @add="addTodoItem"
    ></TodoInput>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';

export default Vue.extend({
  data() {
    return {
      todoText: '',
    };
  },
  components: { TodoInput },
  methods: {
    observerInput(value: any) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      if (!value) {
        return;
      }
      localStorage.setItem(value, value);
      this.resetTodoValue();
    },
    resetTodoValue() {
      this.todoText = '';
    },
  },
});
</script>

<style scoped></style>

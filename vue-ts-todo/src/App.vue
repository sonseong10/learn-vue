<template>
  <div>
    <header>
      <h1>Vue Todo with TypeScript</h1>
    </header>
    <main>
      <TodoInput
        :todoValue="todoText"
        @input="observerInput"
        @add="addTodoItem"
      ></TodoInput>
      <div>
        <ul>
          <TodoItem></TodoItem>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';

export default Vue.extend({
  data() {
    return {
      todoText: '',
    };
  },
  components: { TodoInput, TodoItem },
  methods: {
    observerInput(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;

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

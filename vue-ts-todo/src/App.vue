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

const STOREGE_KEY = 'uid-1';
const storege = {
  save(value: any[]) {
    const parsed = JSON.stringify(value);
    localStorage.setItem(STOREGE_KEY, parsed);
  },
  fetch() {
    const todoItems = localStorage.getItem(STOREGE_KEY) || '[]';
    const result = JSON.parse(todoItems);
    return result;
  },
};

export default Vue.extend({
  data() {
    return {
      todoText: '',
      todoItems: [] as any,
    };
  },
  components: { TodoInput, TodoItem },
  methods: {
    observerInput(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      this.todoItems.push(value);
      storege.save(this.todoItems);
      this.resetTodoValue();
    },
    resetTodoValue() {
      this.todoText = '';
    },
    fetchStorege() {
      this.todoItems = storege.fetch();
    },
  },
  created() {
    this.fetchStorege();
  },
});
</script>

<style scoped></style>

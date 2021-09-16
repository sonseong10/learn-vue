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
          <TodoItem
            v-for="(todoItem, index) in todoItems"
            :key="index"
            :index="index"
            :todoItem="todoItem"
            @toggle="todggleTodoItem"
            @remove="removeTodoItem"
          ></TodoItem>
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

export interface Todo {
  title: string;
  completed: boolean;
}

const storege = {
  save(value: Todo[]) {
    const parsed = JSON.stringify(value);
    localStorage.setItem(STOREGE_KEY, parsed);
  },
  fetch(): Todo[] {
    const todoItems = localStorage.getItem(STOREGE_KEY) || '[]';
    const result = JSON.parse(todoItems);
    return result;
  },
};

export default Vue.extend({
  data() {
    return {
      todoText: '',
      todoItems: [] as Todo[],
    };
  },
  components: { TodoInput, TodoItem },
  methods: {
    observerInput(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      const todo: Todo = {
        title: value,
        completed: false,
      };
      this.todoItems.push(todo);
      storege.save(this.todoItems);
      this.resetTodoValue();
    },
    resetTodoValue() {
      this.todoText = '';
    },
    fetchStorege() {
      this.todoItems = storege.fetch().sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
    removeTodoItem(index: number) {
      this.todoItems.splice(index, 1);
      storege.save(this.todoItems);
    },
    todggleTodoItem(todoItem: Todo, index: number) {
      this.todoItems.splice(index, 1, {
        ...todoItem,
        completed: !todoItem.completed,
      });
    },
  },
  created() {
    this.fetchStorege();
  },
});
</script>

<style scoped></style>

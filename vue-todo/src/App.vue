<template>
  <div id="app">
    <div class="container">
      <div class="wrapper">
        <main-header></main-header>
        <input-form v-on:addTodo="addTodoItem"></input-form>
        <todo-list
          v-bind:propsdata="todoItems"
          v-on:removeTodo="removeItem"
          v-on:toggleTodo="toggleCompleted"
        ></todo-list>
        <main-footer v-on:resetTodo="resetList"></main-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue"
import InputForm from "./components/InputForm.vue"
import TodoList from "./components/TodoList.vue"
import Mainfooter from "./components/MainFooter.vue"

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodoItem: function(todoItems) {
      if (localStorage.getItem(todoItems)) {
        alert("The value you created already exists.")
      } else {
        let obj = { completed: false, item: todoItems }
        localStorage.setItem(todoItems, JSON.stringify(obj))
        this.todoItems.push(obj)
      }
    },
    removeItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleCompleted: function(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    resetList: function() {
      localStorage.clear()
      this.todoItems = []
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          )
        }
      }
    }
  },
  components: {
    "main-header": MainHeader,
    "input-form": InputForm,
    "todo-list": TodoList,
    "main-footer": Mainfooter
  }
}
</script>

<style>
* {
  font-family: "DM Sans", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #f6f6f6;
  text-align: center;
}

input {
  border: none;
  background-color: inherit;
}

button {
  border: none;
  background-color: inherit;
  cursor: pointer;
}

ol {
  padding-left: 0;
  list-style: none;
}

i.fas {
  pointer-events: none;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.wrapper {
  width: 320px;
  margin: 0 auto;
  padding: 16px;
}

.box-shadow {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.12);
}
</style>

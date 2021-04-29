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
    <modal v-if="showModal">
      <h3 slot="header">
        Notice
        <button class="modal-close" @click="showModal = false" type="button">
          <i class="fas fa-times"></i>
        </button>
      </h3>
      <p slot="body">The value already exists.</p>
    </modal>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue"
import InputForm from "./components/InputForm.vue"
import TodoList from "./components/TodoList.vue"
import MainFooter from "./components/MainFooter.vue"
import Modal from "./components/common/Modal.vue"

export default {
  data() {
    return {
      todoItems: [],
      showModal: false
    }
  },
  methods: {
    addTodoItem(todoItems) {
      if (localStorage.getItem(todoItems)) {
        this.showModal = !this.showModal
      } else {
        const obj = { completed: false, item: todoItems }
        localStorage.setItem(todoItems, JSON.stringify(obj))
        this.todoItems.push(obj)
      }
    },
    removeItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleCompleted(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    resetList() {
      localStorage.clear()
      this.todoItems = []
    }
  },
  created() {
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
    MainHeader,
    InputForm,
    TodoList,
    MainFooter,
    Modal
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

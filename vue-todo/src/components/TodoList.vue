<template>
  <ol class="todo-list">
    <li
      class="todo-item box-shadow"
      v-for="(todoItems, index) in todoItems"
      v-bind:key="todoItems.item"
    >
      <button
        class="toto-title"
        v-bind:class="{ textCompleted: todoItems.completed }"
        v-on:click="toggleComplete(todoItems)"
      >
        {{ todoItems.item }}
      </button>
      <button
        class="delete-btn"
        v-on:click="deleteItem(todoItems, index)"
        type="button"
        aria-label="Delete todo item"
      >
        <i class="fas fa-times"></i>
      </button>
    </li>
  </ol>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    deleteItem: function(todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
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
  }
}
</script>

<style scoped>
.todo-item {
  position: relative;
  border-radius: 5px;
  background-color: #fff;
  line-height: 36px;
  transition: background-color 300ms ease-in-out;
}

.todo-item:hover {
  background-color: #eee;
}

.todo-item:not(:last-child) {
  margin-bottom: 12px;
}

.toto-title {
  padding: 6px 30px 6px 8px;
  border-radius: 5px;
  width: 100%;
  min-height: 36px;
  font-size: 0.9rem;
  text-align: left;
  word-break: break-all;
  color: #1d1d1d;
}

.textCompleted {
  color: #666;
  text-decoration: line-through;
}

.delete-btn {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  background-color: transparent;
  font-size: 0.9rem;
  color: #666;
  transition: color 300ms ease-in-out;
}

.delete-btn:hover {
  color: #ff4949;
}
</style>

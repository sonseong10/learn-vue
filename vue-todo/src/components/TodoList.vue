<template>
  <transition-group class="todo-list" name="list" tag="ol">
    <li
      class="todo-item box-shadow"
      v-for="(todoItems, index) in propsdata"
      v-bind:key="todoItems.item"
    >
      <button
        class="toto-title"
        v-bind:class="{ textCompleted: todoItems.completed }"
        v-on:click="toggleComplete(todoItems, index)"
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
  </transition-group>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    deleteItem: function(todoItem, index) {
      this.$emit("removeTodo", todoItem, index)
    },
    toggleComplete: function(todoItem, index) {
      this.$emit("toggleTodo", todoItem, index)
    }
  }
}
</script>

<style scoped>
.todo-list {
  padding: 6px;
  max-height: 300px;
  overflow-y: auto;
}

.todo-list::-webkit-scrollbar {
  width: 0;
}

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

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <main-header></main-header>
    <input-form></input-form>
    <todo-list></todo-list>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue"
import InputForm from "./components/InputForm.vue"
import TodoList from "./components/TodoList.vue"
import Mainfooter from "./components/MainFooter.vue"

export default {
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
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border: none;
  background-color: #fff;
}

button {
  border: none;
  background-color: inherit;
  cursor: pointer;
}

ol {
  list-style: none;
  padding-left: 0;
}
</style>

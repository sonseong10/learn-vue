<template>
  <div id="app">
    <div class="container">
      <div class="wrapper">
        <main-header></main-header>
        <input-form></input-form>
        <todo-list></todo-list>
        <main-footer></main-footer>
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

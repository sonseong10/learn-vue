<template>
  <form class="todo-form box-shadow" v-on:submit.prevent="addItem">
    <input
      class="form-input"
      type="text"
      autocomplete="off"
      v-model="newItem"
    />
    <button class="form-button" type="submit" aria-label="add todo">
      <i class="fas fa-plus"></i>
    </button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      newItem: ""
    }
  },
  methods: {
    addItem: function() {
      let obj = { completed: false, item: this.newItem }
      if (this.newItem !== "") {
        localStorage.setItem(this.newItem, JSON.stringify(obj))
        this._clearInput()
      }
    },
    _clearInput: function() {
      this.newItem = ""
    }
  }
}
</script>

<style scoped>
.todo-form {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
}

.form-input {
  flex-grow: 1;
  padding-left: 8px;
  height: 32px;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: #fff;
  font-size: 0.9rem;
  line-height: 32px;
  color: #1d1d1d;
}

.form-input:focus,
.form-button:focus {
  outline: none;
}

.form-button {
  flex-shrink: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 0 5px 5px 0;
  background: linear-gradient(to right, #42b883, #35495e);
  color: #fff;
  font-size: 0.9rem;
  line-height: 32px;
}
</style>

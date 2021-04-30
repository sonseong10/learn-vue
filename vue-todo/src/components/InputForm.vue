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

    <modal v-if="showModal">
      <h3 slot="header">
        Notice
        <button class="modal-close" @click="showModal = false" type="button">
          <i class="fas fa-times"></i>
        </button>
      </h3>
      <p slot="body">{{ msg }}</p>
    </modal>
  </form>
</template>

<script>
import Modal from "./common/Modal.vue"

export default {
  data: function() {
    return {
      newItem: "",
      msg: "",
      showModal: false
    }
  },
  methods: {
    addItem() {
      const value = this.newItem.trim()
      this._checkItem(value) ? this.$store.commit("addTodoItem", value) : false

      this._clearInput()
    },
    _clearInput() {
      this.newItem = ""
      document.activeElement.blur()
    },
    _checkItem(value) {
      if (value === "") {
        this._showModal("No input value.")
        return false
      } else if (localStorage.getItem(value)) {
        this._showModal("The value already exists.")
        return false
      }
      return true
    },
    _showModal(str) {
      this.msg = str
      this.showModal = !this.showModal
    }
  },
  components: {
    Modal
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

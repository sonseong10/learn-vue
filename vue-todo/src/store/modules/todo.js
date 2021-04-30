const storage = {
  fetch() {
    const arr = []
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr
  }
}

const state = {
  todoItems: storage.fetch()
}

const getters = {
  getTodoItems(state) {
    return state.todoItems
  }
}

const mutations = {
  addTodoItem(state, todoItems) {
    const obj = { completed: false, item: todoItems }
    localStorage.setItem(todoItems, JSON.stringify(obj))
    state.todoItems.push(obj)
  },

  removeTodoItem(state, payload) {
    localStorage.removeItem(payload.todoItems.item)
    state.todoItems.splice(payload.index, 1)
  },

  toggleTodoCompleted(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index]
      .completed
    localStorage.removeItem(payload.todoItems.item)
    localStorage.setItem(
      payload.todoItems.item,
      JSON.stringify(payload.todoItems)
    )
  },

  resetTodo(state) {
    localStorage.clear()
    state.todoItems = []
  }
}

export default { state, getters, mutations }

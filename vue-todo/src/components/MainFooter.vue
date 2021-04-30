<template>
  <footer>
    <button class="reset-btn" v-on:click="resetList" type="button">
      Reset All
    </button>
  </footer>
</template>

<script>
export default {
  methods: {
    resetList() {
      this.$store.commit("resetTodo")
    }
  }
}
</script>

<style scoped>
.reset-btn {
  width: 120px;
  height: 38px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #666;
  transition: color 300ms ease-in-out;
}

.reset-btn:hover {
  color: #ff4949;
}
</style>

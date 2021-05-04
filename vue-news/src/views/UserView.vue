<template>
  <section class="container">
    <h2 class="visually-hidden">user infomation</h2>
    <div class="card">
      <i class="fas fa-user"></i>
      <dl class="user-list">
        <div class="user-item">
          <dt class="user-title">Name</dt>
          <dd class="user-desc">{{ fetchedUser.id }}</dd>
        </div>
        <div class="user-item">
          <dt class="user-title">Karma</dt>
          <dd class="user-desc">{{ fetchedUser.karma }}</dd>
        </div>
        <div class="user-item">
          <dt class="user-title">Created</dt>
          <dd class="user-desc">{{ fetchedUser.created }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["fetchedUser"])
  },
  created() {
    const params = this.$route.params.id
    this.$store.dispatch("FETCH_USER", params)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  height: 100vh;
  background-color: #f7f7f7;
}

.card {
  padding: 10px 32px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 2px 4px #00000010;
}

.fa-user {
  margin-bottom: 8px;
  font-size: 32px;
  text-align: center;
  color: #1d1d1d;
}

.user-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.user-title {
  font-weight: 700;
  color: #252525;
}

.user-title::after {
  margin: 0 2px;
  content: ":";
}

.user-desc {
  color: #1d1d1d;
}
</style>

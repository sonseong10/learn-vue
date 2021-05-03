<template>
  <header class="global-header">
    <nav class="gnb">
      <h2 class="visually-hidden">GNB</h2>
      <ul class="gnb-list">
        <li class="gnb-item">
          <router-link class="gnb-item-link" to="/news">News</router-link>
        </li>
        <li class="gnb-item">
          <router-link class="gnb-item-link" to="/ask">Ask</router-link>
        </li>
        <li class="gnb-item">
          <router-link class="gnb-item-link" to="/jobs">Jobs</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.global-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  padding: 0 8px;
  background-color: #42b883;
}

.gnb-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.gnb-item:not(:last-child)::after {
  margin: 0;
  color: #fff;
  content: "|";
}

.gnb-item-link {
  padding: 8px;
  font-weight: 700;
  color: #fff;
  transition: color 300ms ease-in-out;
}

.gnb-item-link:hover {
  color: #354953;
}

.router-link-active {
  color: #354953;
  text-decoration: underline;
}
</style>

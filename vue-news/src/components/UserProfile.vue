<template>
  <section class="container">
    <h2 class="visually-hidden">user infomation</h2>
    <div class="card">
      <i class="fas fa-user"></i>
      <dl class="user-list">
        <div class="user-item">
          <dt class="visually-hidden">Member Name</dt>
          <dd class="user-desc">
            <slot name="username"></slot>
          </dd>
        </div>
        <div class="user-item">
          <dt class="visually-hidden">Member Created</dt>
          <dd class="user-desc">
            <slot name="created"></slot>
          </dd>
        </div>
        <div class="user-item">
          <dt class="visually-hidden">Member Karma</dt>
          <dd class="user-desc">
            <slot name="karma"></slot>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  padding: 10px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 5px;
  max-width: 270px;
  background-color: #f7f7f7;
}

.fa-user {
  margin-right: 16px;
  font-size: 32px;
  text-align: center;
  color: #1d1d1d;
}

.user-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.deco {
  font-weight: 700;
  color: #252525;
}

.deco::after {
  margin: 0 2px;
  content: ":";
}

.user-desc {
  color: #1d1d1d;
}
</style>

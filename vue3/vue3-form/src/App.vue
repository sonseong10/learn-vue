<template>
  <form action="">
    <div>
      <label for="userId">ID</label>
      <input type="text" id="userId" />
    </div>
    <div>
      <label for="userPassword">PW</label>
      <input type="text" id="userPassword" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

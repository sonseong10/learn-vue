<template>
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID</label>
      <input type="text" id="userId" v-model="userName" />
    </div>
    <div>
      <label for="userPassword">PW</label>
      <input type="text" id="userPassword" v-model="userPassword" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const userName = ref("");
    const userPassword = ref("");

    const submitForm = () => {
      axios
        .post("https://jsonplaceholder.typicode.com/users/", {
          userName: userName.value,
          password: userPassword.value,
        })
        .then((res) => {
          console.log(res);
        });
    };

    return { userName, userPassword, submitForm };
  },

  // data() {
  //   return {
  //     userName: "",
  //     userPassword: "",
  //   };
  // },

  // methods: {
  //   submitForm() {
  //     axios
  //       .post("https://jsonplaceholder.typicode.com/users/", {
  //         userName: this.userName,
  //         password: this.userPassword,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   },
  // },
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

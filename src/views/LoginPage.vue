<template>
  <div>
    <h2>Login Page</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>


<script setup lang="ts" name="loginPage">
  import {ref} from "vue";
  import {useRouter} from "vue-router";
  const username = ref('');
  const password = ref('');
  const router = useRouter();

  function login() {
    alert("username:"+username.value+" password:"+password.value)

    router.push('/')
  }


</script>


<style>

</style>
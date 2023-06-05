<template>
    <div>
        <client-login/>
    </div>
</template>

<script>
  import ClientLogin from '../components/auth/Login.vue';

  export default {
    name: "LoginForm",
    components: {
      ClientLogin
    }
    }
</script>

<style>

</style>
<template>
    <div>
        <nav-bar/>
        <user-list/>
    </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import UserList from '../components/UserList.vue';

  export default {
    components: {
      NavBar,
      UserList
    }
    }
</script>

<style>

</style>
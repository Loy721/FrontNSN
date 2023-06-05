<template>
    <nav class="navbar navbar-expand-lg fixed-bottom navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand " href="/">
      <img src="../imgs/logo.jpg" alt="" width="50" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="mx-auto"  @submit="submit" >
        <input class="form-control" type="search" placeholder="Search" aria-label="Search"  v-model="foobar" >
      </form>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active me-auto" aria-current="page" :href="'http://localhost:8081/user/'+this.$store.state.auth.user.uid">Profile</a>
          <div @click="logout"><a >Logout</a></div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import AuthService from '@/services/auth/AuthService' 

export default {
  data(){
    return {
      foobar : null
    }
  },
methods:{
  logout(){
    AuthService.logout()
    this.$store.state.auth.status.loggedIn = false;
    this.$router.push("/login" )
  },
  submit(){
    var m = this.foobar.split(' ')
    this.$router.push({ path: '/user/'+m[0]+'/'+m[1] })
  }
}
}
</script>

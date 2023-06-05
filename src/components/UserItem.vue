<template>
  
 <div class="mt-5 d-flex justify-content-center"> 
<div  class="post card p-3 " style="max-width: 12rem;">
  <div @click="goToProfile(user)" class = "user">
    <div class="mb-1 text-center">  {{user.name}} {{user.surname}}</div>
    <div class="ratio ratio-1x1 rounded-circle overflow-hidden ">
          <img :src = this.user.photo class=" img-cover float-right" width="20px" height="20px">
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
 props: {
    user: {
      type: Object,
      required: true,
    }
  },
  methods: {
    goToProfile(user){
      this.$router.push({ path: '/user/'+user.uid })
    }
  }
}
</script>

<style>
.img-cover{
  object-fit: cover;
  object-position: center;
}
</style>
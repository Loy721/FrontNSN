<template>
  
<div class="col-4">
<div class="post card-post p-3">
  <div>
    <div class="d-flex align-items-start">

      <div class="image">
        <img :src = this.post.image>
      </div> 

      <div class="ml-0 mt-0 w-100 ">
        <h4 class="text-center">{{post.topic}} </h4>
        <span>{{post.content}}</span>
      </div>

    </div>
    <div class="align-bottom">
      <div class="f-z ml-0 mb-0 w-100 d-flex justify-content-between" >
        <div>
          {{post.user.name}} {{post.user.surname}}
        </div>
        <div>
          {{formatDate(post.postPk.publication)}}
          </div>
        </div>
        <div v-if="post.user.uid == this.$store.state.auth.user.uid || this.$store.state.auth.user.roles[0]=='ADMIN'"
         class="button mx-auto mt-2 d-flex flex-row align-items-center">
          <button class="btn btn-sm btn-outline-primary w-100"   @click="$emit('remove', post)">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</div>
    <!-- <div class="post__btns">
       <my-button
        @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
    </my-button>
     <button
       @click="$emit('remove', post)"
     >
       Удалить
     </button>  
    </div>-->
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
  formatDate: d => d.toLocaleString().split('.')[0].replace(/T/g, ' ').replace(/-/g, '.').slice(0,-3),
}
}
</script>

<style>
.post{
  box-shadow: 0 2px  5 px  0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
}

.post:hover{
  box-shadow: -11px -11px 8px 0px rgba(34, 60, 80, 0.2);;
}



.image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.image img{
  width: 220px;
}


.f-z{
  font-size: smaller;
}


</style>
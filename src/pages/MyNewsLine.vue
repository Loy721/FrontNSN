<template> 
 
  <div>
       <post-list :posts="posts" @remove="removePost"/>
       <nav-bar/>
     </div>
</template>
   
<script>
  import PostList from '../components/PostList.vue'
  import NavBar from '../components/NavBar.vue'
  import PostsService from '@/services/PostsService'
   
  export default {
     components: {
       PostList,
       NavBar
     },
     data(){ return {
         posts: []
         }
     },
     methods: {
         getPosts(){
               PostsService.getPosts().then((response) => {
                this.posts = response.data;   
             })
         },
         removePost(post){
             PostsService.deletePost(post.postPk.uid,post.postPk.publication)
             this.posts = this.posts.filter(p => p.postPk.publication !== post.postPk.publication)//TODO: условие на удаление,если удалилась из бд успешно
         }
     },
     mounted(){
         this.getPosts()
     }
   }
</script>
 
<style>
   
</style>
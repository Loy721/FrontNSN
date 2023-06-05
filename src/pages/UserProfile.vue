<template>
  <div>
    <profile-topic :user="user" :articlesCounter="this.posts.length" @create="createPost" @addPhotoProfile="addPhoto"/>
    <post-list :posts="posts"  @remove="removePost"/>
    <nav-bar/>
  </div>
</template>

<script>
  import ProfileTopic from '../components/ProfileTopic.vue'
  import NavBar from '../components/NavBar.vue'
  import PostList from '@/components/PostList.vue'
  import UserService from '../services/UserService'
  import UsersService from '../services/UsersService'
  import PostsService from '@/services/PostsService'
  
  export default {
    components: {
      ProfileTopic,
      PostList,
      NavBar
    },
    data(){ return {
        user: [],
        posts: []
        }
    },
    methods: {
        getPostsByUid(uid){
               UsersService.getPostsByUid(uid).then((response) => {
               this.posts = response.data;   
            })
        },
        getUser(uid){
              UserService.getUser(uid).then((response) => {
              this.user = response.data;
            })
        },
        createPost(post){
          post.user= this.user
          PostsService.createPost(post.postPk.publication, post.topic, post.content, post.image)
          this.posts.push(post)
        },
        removePost(post){
             PostsService.deletePost(post.postPk.uid,post.postPk.publication)
             this.posts = this.posts.filter(p => p.postPk.publication != post.postPk.publication)//TODO: условие на удаление,если удалилась из бд успешно
         },
        addPhoto(photo){
          this.user.photo = photo
          UserService.addPhoto(this.$route.params.uid, this.user)
        }
    },
    mounted(){
        this.getPostsByUid(this.$route.params.uid)
        this.getUser(this.$route.params.uid)
    }
  }
</script>

<style>

</style>
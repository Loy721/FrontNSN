
<template>
    <div class="container mt-5 d-flex justify-content-center">
      <add-post v-model:show="dialogVisible">
        <form class="mx-auto " >
          <input  v-model="newPost.topic" class="form-control mb-4" type="text" placeholder="Topic" >
          <textarea v-model="newPost.content" class="form-control mb-4"></textarea>
          <input type="file" class="btn btn-sm btn-outline-primary w-100 mb-4" ref="file" @change="onFileChange">
          <div class="form-group  mx-auto">
          <button class="btn btn-primary btn-block" @click="createPost">
            <span>Добавить</span>
          </button>  
          </div>
        </form>
    </add-post>
    <div class="card-profile p-3">

        <div class="d-flex align-items-center">
        
          <div v-if="user.uid != this.$store.state.auth.user.uid || this.user.photo!=null" class="image">
            <img  :src = this.user.photo class="rounded" width="155" >
          </div>
          <div v-else>
            <label>
                <img src="" alt="Добавить фото" class="rounded" width="155">
                <input type="file" ref="photoFile" hidden @change="addProfilePhoto">
            </label>
          </div>
        <div class="ml-3 w-100">
            
        <h4 class="mb-0 mt-0">{{user.name}} {{ user.surname }}</h4>
        <span>Senior Journalist</span>

        <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

            <div class="d-flex flex-column">

                <span class="articles">Статьи</span>
                <span class="number1">{{this.articlesCounter}}</span>
                
            </div>

            <div class="d-flex flex-column">

                <span class="followers">Подписчики</span>
                <span class="number2">{{this.subscCounter}}</span>
                
            </div>


            <div class="d-flex flex-column">

                <span class="rating">Рейтинг</span>
                <span class="number3">8.9</span>
                
            </div>
            
        </div>


        <div v-if="user.uid != this.$store.state.auth.user.uid" class="button mt-2 d-flex flex-row align-items-center">
          <div v-if="this.$store.state.auth.user.roles[0]=='ADMIN'">
            <button class="btn btn-sm btn-outline-primary w-100" 
                v-if="user.isActive" @click="ban">Заблокировать</button>
            <button class="btn btn-sm btn-outline-primary w-100" 
                v-if="!user.isActive" @click="unban">Отписаться</button>
          </div>
              <button v-if="!this.isSubscribe" 
              class="btn btn-sm btn-primary w-100 ml-2" @click="follow">Подписаться</button>
              <button v-else 
              class="btn btn-sm btn-primary w-100 ml-2" @click="unfollow">Unfollow</button>
           
        </div>

        <button v-if="user.uid == this.$store.state.auth.user.uid"
        @click="showFormForAddPost" class="btn btn-sm btn-outline-primary w-100 mt-2">Новая запись</button>

        </div>

            
        </div>
        
    </div>
 
</div>
</template>

<script>
/* eslint-disable */
import AddPost from './UI/AddPost.vue'
import UsersService from '../services/UsersService'

export default {
  components: { AddPost },
    props:{
      articlesCounter: {
        required: true,
      },
       user:{ 
        type: Object,
        required: true,
      } 
    },
    data(){
        return {
          subscCounter: 0,
          isSubscribe: false,
          dialogVisible: false,
        
          newPost: {
            postPk: {
              uid: this.$route.params.uid,
              publication: '',
            },
            topic: '',
            content: '',
            image: '',
            user: this.user
          },
          subscibers: []
        }
    },
    methods:{
      createPost(){
        this.dialogVisible = false
        this.newPost.postPk.publication = (new Date()).toISOString()
        this.$emit('create', this.newPost) 
      },
      addProfilePhoto(){
      var file = this.$refs.photoFile.files[0];
        var reader = new FileReader();
        var ref = this
        reader.onloadend = function() {
          ref.$emit('addPhotoProfile', reader.result)
        }
        reader.readAsDataURL(file)
    },
      showFormForAddPost(){
        this.dialogVisible = true;
      },
      follow(){
        ++this.subscCounter
        UsersService.follow(this.$route.params.uid)
        this.isSubscribe=true
      },
      unfollow(){
        --this.subscCounter
        UsersService.unfollow(this.$route.params.uid)
        this.isSubscribe=false
      },
      ban(){
        this.user.isActive = false
        UsersService.ban(this.$route.params.uid)
      },
      unban(){
        this.user.isActive = true
        UsersService.unban(this.$route.params.uid)
      },
      getSubs(){
            UsersService.getSubscribers(this.$route.params.uid).then((response) => {
                this.subscibers = response.data 
                this.subscCounter = this.subscibers.length
                if(this.subscibers.map(e=>e.uid).indexOf(this.$store.state.auth.user.uid)>=0){
                  this.isSubscribe = true
                }else {
                  this.isSubscribe = false
                }
            })  
      },
      onFileChange(){
        var file = this.$refs.file.files[0];
        var reader = new FileReader();
        var ref = this
        reader.onloadend = function() {
          ref.newPost.image = reader.result
        }
        reader.readAsDataURL(file)
      }
    },
    mounted() {
      this.getSubs()
    }
}
</script>

<style>
body{
    
    background-color:#050505;
    border-radius: 10px;

}

.card-post{
  width: 420px;
  border: none;
  border-radius: 10px;
   
  background-color: #fff;
}

.card-profile{
  width: 500px;
  border: none;
  border-radius: 10px;
   
  background-color: #fff;
}



.stats{

      background: #f2f5f8 !important;

    color: #000 !important;
}
.articles{
  font-size:10px;
  color: #a1aab9;
}
.number1{
  font-weight:500;
}
.followers{
    font-size:10px;
  color: #a1aab9;

}
.number2{
  font-weight:500;
}
.rating{
    font-size:10px;
  color: #a1aab9;
}
.number3{
  font-weight:500;
}
</style>
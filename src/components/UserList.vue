<template>
  <div>
        <user-item
          v-for="user in users"
          :user="user"
          :key="user.uid"
        />
    </div>
</template>

<script>
import UserItem from './UserItem.vue';
import UsersService from '../services/UsersService';

export default {
    components: {UserItem},
    data(){
        return {
            users: []
        }
    },
    methods: {
        getUser(suranme,name){
            UsersService.getUsers(suranme,name).then((response) => {
                this.users = response.data
            });
        }
    },
    mounted() {
      this.getUser(this.$route.params.surname,this.$route.params.name)
    }
}
</script>

<style>

</style>
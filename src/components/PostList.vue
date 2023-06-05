<template>
    <div>
    <div class="panel mt-5 ">
      <div class="row gy-5">
        <post-item
          v-for="post in posts"
          :post="post"
          :key="post.postPk.publication"
          @remove="$emit('remove', post)"
        />
      </div>
      </div>
    </div>
</template>
  
<script>
  import PostItem from "@/components/PostItem";

  export default {
    components: {PostItem},
    props:{
        posts:{ 
            type: Object,
            required: true,
        }
    }
  }
</script>
  
<style >

.panel{
  display: grid;
  margin-left: 25px;
  margin-bottom: 110px;
}
</style>
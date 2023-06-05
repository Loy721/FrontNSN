<template>
  <div class="modal-window" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="modal-content">
            <slot></slot>
        </div>
  </div>
</template>

<script>
export default {
    name: 'add-post',
    props:{
        show:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false)
        }
    }
}
</script>

<style>
.modal-window {
    top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal-content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  width: 400px;
  padding: 20px;
}
</style>
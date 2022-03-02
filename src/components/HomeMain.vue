<template>
  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </el-button>

  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script>
import { ref } from 'vue'
const drawer = ref(false)
export default {
    name:'HomeMain',
    data(){
        return{
          src:src,
          drawer:drawer
        }
    }
}
const src = 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
</script>


<style>

.el-pagination{
    text-align: center;
}
</style>
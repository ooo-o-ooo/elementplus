<template> 
<el-container>
      <el-header>
        <el-menu mode="horizontal" active-text-color="#EA3710">
          <el-menu-item index="1">链接A</el-menu-item>
          <el-menu-item index="2">链接B</el-menu-item>
          <el-menu-item index="3">链接C </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <HomeMain></HomeMain>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import HomeMain from './HomeMain.vue'
export default {
    name: 'HomePage',
    components:{
      HomeMain
    }
}
</script>

<style>

</style>
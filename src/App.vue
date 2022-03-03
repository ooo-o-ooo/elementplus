<template>
<el-container>
<el-header>
  <el-affix>

  <el-menu mode="horizontal">
    <el-menu-item index=1>中华</el-menu-item>
    <el-menu-item index=2>有为</el-menu-item>
    <el-menu-item index=3>有为</el-menu-item>
    <el-menu-item index=4>有为</el-menu-item>
    <el-menu-item index=5>有为</el-menu-item>
    <el-menu-item index=6>有为</el-menu-item>
  </el-menu>
  </el-affix>

</el-header>


  <el-container>
         <el-aside 
  :width="isCollapse?'73px':'300px'">
  
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    default-active="2"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" >
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="4">  <button @click="toggleCollapse">点我</button>
    </el-menu-item>
  </el-menu>
</el-aside>
<el-main>Main</el-main>


 
</el-container>
</el-container>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      isCollapse:false
    }
  },
  methods:{
    toggleCollapse(){
      this.isCollapse = !this.isCollapse
      console.log('sadas')
    }
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d78d3;
}
html,body,#app,.el-header{
padding: 0;
margin: 0;
height: 100%;
}

.el-aside >.el-menu{
  height: calc(100vh - 60px);
}
</style>

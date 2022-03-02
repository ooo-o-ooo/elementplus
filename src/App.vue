<template>
<!--<HomePage/>-->
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Home</router-link>|
    <router-link to="/userInfo">UserInfo</router-link>|
    <br>
  </p>
  <div>
==============    <br>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

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

html,body,#app,
.el-container{
padding: 0;
margin: 0;
height: 100%;
}
</style>

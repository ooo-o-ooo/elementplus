<template>
  <el-table :data="users">
    <el-table-column title="用户信息" label="用户信息">
      <el-table-column prop="id"></el-table-column>
      <el-table-column prop="userName"></el-table-column>
      <el-table-column prop="password"></el-table-column>
    </el-table-column>
  </el-table>
</template>
<script>

import axios from "axios";

export default {
  name: "UserInfo",
  data() {
    return {
      users: null
    }
  },
  methods:{
    getUser: function () {
      axios.get('/api/getInfo').then((res)=>{
        this.users=res.data
      }
      )
    },
    getFile:function () {
      axios.get('/file-info/getFile').then((res)=>{
        res.data
        console.log(res.data)
      })
    }
  },
  mounted() {
    this.getUser()
    this.getFile();
  }
}
</script>

<style scoped>

</style>
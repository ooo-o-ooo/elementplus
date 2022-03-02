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
    getData: function () {
      axios.get('/api/getInfo').then((res)=>{
        this.users=res.data
      }
      )
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
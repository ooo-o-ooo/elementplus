<template>
  <el-table :data="userInfo" stripe style="width: 100%">
    <el-table-column prop="status" label="Date" width="180" />
    <el-table-column prop="userInfo" label="Name" width="180" />
  </el-table>
</template>

<script>

import axios from "axios";

export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: ""
    }
  },
  methods:{
    getData: function () {
      axios.get('./json/userInfo.json').then((res)=>{
        this.userInfo=res.data

        console.log(res.data);

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
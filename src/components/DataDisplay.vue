<template>

<el-space
wrap
fill
style="width:100%"
>
    <el-card class="box-card" v-for="item in 20" :key="item" ref="items" >
        
    <el-descriptions title="User Info"  @click="openDataInfo()">
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</el-descriptions-item
    >
  </el-descriptions>
</el-card>
</el-space>

<el-affix position="bottom" offset="10">
    
 <el-pagination background layout="prev, pager, next" :total="200"></el-pagination>
</el-affix >
  <el-drawer v-model="drawer" title="I am the title" :with-header="false" size=40%>
    <span>Hi there!</span>
  </el-drawer>
</template>
<script>

export default {

    name:'DataDisplay',
    data(){
        return{
            drawer:false,
        }
    },
    methods:{
        openDataInfo(){
        this.drawer=!this.drawer
        }
    },

}
</script>

<style>
.box-card:hover{
    -webkit-transform: translateY(-3px);
    -ms-transform: translateY(-3px);
    transform: translateY(-15px);
    -webkit-box-shadow: 0 0 6px #999;
    box-shadow: 0 0 16px #999;
    -webkit-transition: all .5s ease-out;
    transition: all 0.5s ease-out;
}
</style>
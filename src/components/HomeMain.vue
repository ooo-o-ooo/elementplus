<template>
   <div class="demo-collapse">
    <el-collapse accordion
    
    v-for="o in 100"
    :key="o"
    >
      <el-collapse-item title="Consistency" name="1">
<el-descriptions
    class="margin-top"
    title=""
    :column="3"
    :size="size"
    border

  >

    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          Username
        </div>
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone />
          </el-icon>
          Telephone
        </div>
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location />
          </el-icon>
          Place
        </div>
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          Remarks
        </div>
      </template>
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>

      <div>

          暗杀会杀死打击大家就撒
      </div>
      </el-collapse-item>
      
    </el-collapse>
  </div>

<el-affix position="bottom" offset="20">
  <el-pagination background layout="prev, pager, next" :total="1000">
  </el-pagination>
  </el-affix>
</template>

<script>
export default {
    name:'HomeMain',
    data(){
        return{
            src:src
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
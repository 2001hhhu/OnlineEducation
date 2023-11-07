<script setup></script>

<template>
  <div>我是课程详细页</div>
  <div class="detail-body">
    <div class="detail_title"><span>课程介绍</span></div>
    <el-card class="box-card" shadow="never">
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
    <div class="detail_title"><span>公告</span></div>
    <el-card class="box-card" shadow="never">
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.detail-body {
  background-color: #fff;
  .detail_title {
    height: 80px;
    padding-left: 20px;
    span {
      line-height: 80px;
    }
  }
}
</style>

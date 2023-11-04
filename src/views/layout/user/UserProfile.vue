<script setup></script>

<template>
  <el-icon class="el-icon--right">
    <i-ep-arrow-down />
  </el-icon>
  <div class="wrapper">
    <el-card class="user-card">
      <template #header>
        <div class="card-header">
          <span>简介</span>
          <el-button type="primary" text>编辑</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.user-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

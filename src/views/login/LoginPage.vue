<script setup>
import LayoutFooter from '../../components/LayoutFooter.vue'
import LoginWindow from '../../components/LoginWindow.vue'
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg">
      <div>图像</div>
      <el-icon><Search /></el-icon>
      <el-icon><Search /></el-icon>
      <el-icon><Search /></el-icon>
    </el-col>
    <el-col :span="6" :offset="3" class="form">
      <LoginWindow></LoginWindow>
    </el-col>
  </el-row>
  <LayoutFooter></LayoutFooter>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  .bg {
    background: url('@/assets/STU_bgi.jpg') no-repeat 60% center / 600px auto;
    padding: 56px 0 48px;
  }
}
</style>

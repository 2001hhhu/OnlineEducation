<script setup>
import { ref } from 'vue'
// 处理顶部菜单
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <!-- model 菜单展示模式 
       ellipisis 是否省略多余的子项
       select 菜单激活回调 index: 选中菜单项的 index, 
              indexPath: 选中菜单项的 index path,
              item: 选中菜单项, routeResult: vue-router 的返回值
       router 是否启用 vue-router 模式。
  -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    router="true"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img style="width: 100px" src="@/assets/logo.drawio.svg" alt="logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/course" indexPath="">课程</el-menu-item>
    <el-menu-item index="3">搜索框</el-menu-item>
    <el-menu-item index="/user/profile" indexPath="">个人中心</el-menu-item>
  </el-menu>

  <router-view></router-view>
  <div>我是主页</div>
  <LayoutFooter></LayoutFooter>
</template>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
</style>

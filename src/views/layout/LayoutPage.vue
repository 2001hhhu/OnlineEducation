<script setup>
import { ref } from 'vue'
// 处理顶部菜单
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

//处理是否登录
const isLogin = ref(false)

//处理搜索事件
const input = ref('')
const handleSearch = () => {
  console.log(input)
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
    <el-menu-item index="/course">课程</el-menu-item>
    <el-menu-item index="">
      <el-input
        v-model="input"
        placeholder="搜索课程或老师姓名"
        @keyup.enter="handleSearch"
        clearable
      >
        <template #suffix>
          <i-ep-search @click="handleSearch"></i-ep-search>
        </template>
      </el-input>
    </el-menu-item>

    <el-menu-item index="/user/profile" v-if="isLogin">
      <el-button type="primary" disabled>登录</el-button>
    </el-menu-item>
    <el-menu-item disabled="true" v-else>
      <el-link href="#">
        <el-avatar class="user_avatar" :size="30" :src="circleUrl" />
        个人中心
      </el-link>
    </el-menu-item>
  </el-menu>

  <router-view></router-view>
  <div>我是主页</div>
  <i-ep-edit></i-ep-edit>
  <LayoutFooter></LayoutFooter>
</template>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}

.user_avatar {
  margin-right: 5px;
}
</style>

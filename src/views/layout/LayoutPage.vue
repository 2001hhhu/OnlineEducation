<script setup>
import { ref } from 'vue'
// 处理顶部菜单
const activeIndex = ref('/home')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

//控制登录对话框
const dialogTableVisible = ref(false)
//处理是否登录
const isLogin = ref(false)
const handleLogin = () => {
  dialogTableVisible.value = true
  isLogin.value = true
  console.log(isLogin)
  console.log(isLogin.value)
}

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
    <el-menu-item index="/category">课程</el-menu-item>
    <el-menu-item index="">
      <el-input
        v-model="input"
        placeholder="搜索课程或老师姓名"
        @keyup.enter="handleSearch"
        clearable
        suffix-icon
      >
        <template #append>
          <i-ep-search @click="handleSearch"></i-ep-search>
        </template>
      </el-input>
    </el-menu-item>

    <div class="login_button" v-if="!isLogin">
      <el-button @click="handleLogin" size="small" type="primary">登录</el-button>
    </div>
    <div class="header_user" v-else>
      <el-link :underline="false" href="#">
        <el-avatar class="header_user_avatar" :size="30" :src="circleUrl" />
        个人中心
      </el-link>
    </div>
  </el-menu>
  <el-dialog v-model="dialogTableVisible" class="login_dialog">
    <LoginWindow></LoginWindow>
  </el-dialog>
  <router-view></router-view>

  <LayoutFooter></LayoutFooter>
</template>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
.el-menu-demo {
  padding: 0 220px;
  //给导航的选项之间加间距
  .el-menu-item {
    margin: 0 10px;
  }
  .header_user {
    display: flex;
    justify-content: center;
    .header_user_avatar {
      margin-right: 5px;
    }
  }

  .login_button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login_dialog {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>

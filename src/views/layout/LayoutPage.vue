<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/modules/user.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

//使用pinia里user登录后的token
const userStore = useUserStore()

// 处理顶部菜单
const activeIndex = ref('/home')
const router = useRouter()
onMounted(() => {
  activeIndex.value = router.currentRoute.value.path
})

//控制登录对话框
const dialogTableVisible = ref(false)

//处理是否登录 弹出dialog
const isLogin = ref()
if (userStore.token) {
  isLogin.value = true
} else {
  isLogin.value = false
}

const handleLogin = () => {
  dialogTableVisible.value = true
}

// 处理登录框中的登录按钮
// 若登录成功则自动关闭登录框
const updateisLogin = (e) => {
  dialogTableVisible.value = false
  isLogin.value = e
}

//处理搜索事件
const input = ref('')
const handleSearch = () => {
  console.log(input)
}

//处理登出
const useStore = useUserStore()
const handleQuit = () => {
  useStore.removeToken()
  // console.log(useStore.token)
  isLogin.value = false
  ElMessage({
    message: '登出成功.',
    type: 'success'
  })
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
  <div class="header-menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      router="true"
      @select="handleSelect"
    >
      <el-menu-item index="/login">
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

      <div class="login-button" v-if="!isLogin">
        <el-button @click="handleLogin" size="small" type="primary">登录</el-button>
      </div>
      <div class="header-user" v-else>
        <el-dropdown>
          <!-- <el-link :underline="false" href="#">
          <el-avatar class="header_user_avatar" :size="30" :src="circleUrl" />
          <span>个人中心</span>
        </el-link> -->
          <router-link class="user" to="/user">
            <el-avatar class="header-user-avatar" :size="30" :src="circleUrl" />
            <span>个人中心</span>
            <el-icon class="el-icon--right">
              <i-ep-arrow-down />
            </el-icon>
          </router-link>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleQuit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-menu>
  </div>

  <el-dialog v-model="dialogTableVisible" class="login-dialog">
    <LoginWindow @updateisLogin="updateisLogin"></LoginWindow>
  </el-dialog>
  <router-view></router-view>
  <div class="footer">
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
.header-menu {
  background-color: #fff;
  border-bottom: 1px solid;
  .el-menu-demo {
    max-width: 1200px;
    padding-right: 20px;
    margin: 0 auto;

    //给导航的选项之间加间距
    .el-menu-item {
      margin: 0 10px;
    }
    .header-user {
      .user {
        display: flex;
        align-items: center;
        line-height: 59px;
      }
      .header-user-avatar {
        margin-right: 5px;
      }
    }

    .login-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login-dialog {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
}
.footer {
}
</style>

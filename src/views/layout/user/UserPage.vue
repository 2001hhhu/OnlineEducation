<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/modules/user.js'
import { useRouter } from 'vue-router'

//获取用户信息
const userinfo = ref({})
const userStore = useUserStore()
userStore.getUser()
userinfo.value = userStore.user
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)

//处理个性签名
const personal_input = ref('')

//处理个人主页的菜单栏
const activeIndex = ref('/user/profile')
// 刷新页面获取当前菜单栏的活跃菜单
const router = useRouter()
onMounted(() => {
  activeIndex.value = router.currentRoute.value.path
})
</script>

<template>
  <div class="wrapper">
    <div class="user-header">
      <div class="header-head"></div>
      <div class="header-foot">
        <div class="user-avatar">
          <el-avatar :size="50" :src="userinfo.url || circleUrl" />
        </div>
        <div class="user-info">
          <h4>{{ userinfo.username }}</h4>
          <el-input v-model="personal_input" placeholder="个性签名" size="small" />
        </div>
      </div>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router="true"
    >
      <el-menu-item index="/user/profile">
        <el-icon class="el-icon--right">
          <i-ep-user />
        </el-icon>
        个人详细
      </el-menu-item>
      <el-menu-item index="/user/report">
        <el-icon class="el-icon--right">
          <i-ep-memo />
        </el-icon>
        学习报表
      </el-menu-item>
    </el-menu>
  </div>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.user-header {
  // background: url('/images/user/STU-photo-1.jpg') no-repeat center;
  // background-size: cover;

  min-height: 192px;
  border-bottom: 1px solid black;
  background-color: #fff;
  .header-head {
    height: 122px;
  }
  .header-foot {
    display: flex;
    margin-left: 20px;
    .user-avatar {
      margin-right: 10px;
    }
    .user-info {
      h4 {
        margin: 0;
      }
      .el-input {
        opacity: 0.5;
        box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
        border: none;
      }
    }
  }
}
.el-menu-demo {
  .el-menu-item {
    margin-right: 5px;
  }
}
</style>

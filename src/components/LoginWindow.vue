<script setup>
import { ref, watch, defineEmits } from 'vue'
import { userLoginService, userRegisterService } from '@/api/user.js'
import { useUserStore } from '@/stores/modules/user.js'
import { ElMessage } from 'element-plus'

//获取账号密码
const loginForm = ref({
  username: '',
  password: '',
  phone: ''
})
const clearloginForm = () => {
  loginForm.value = {
    username: '',
    password: '',
    phone: ''
  }
}

//校验登录表单
const rules = {
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名必须是 5-10位 的字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入正确的密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是6-15位非空字符', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ]
}

//处理标签页跳转
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
  console.log(activeName.value)
}
watch(activeName, () => {
  clearloginForm()
})

//处理登录事件
const form = ref() //获取表单元素
const userStore = useUserStore()
const emits = defineEmits(['updateisLogin']) //获取父组件的方法修改dialog的关闭
const handleLogin = async () => {
  await form.value.validate()
  const res = await userLoginService(loginForm.value)
  clearloginForm()
  if (emits && res.status >= 200 && res.status < 400) {
    emits('updateisLogin', true)
  }
  if (res.data.length === 0) {
    ElMessage.error('账号不存在')
    return Promise.reject(res.data)
  }
  userStore.setToken(res.data[0].token)
  ElMessage({
    message: '登陆成功.',
    type: 'success'
  })
  // console.log(userStore.token)
}

//注册页面
const isRegister = ref(false)
const handleRegister = async () => {
  await form.value.validate()
  const res = await userRegisterService(loginForm.value)
  console.log(res.data.token)
}
</script>

<template>
  <el-tabs
    v-model="activeName"
    type="border-card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="账号登录" name="first" v-if="!isRegister">
      <el-form
        label-position="middle"
        label-width="100px"
        :model="loginForm"
        :rules="rules"
        size="large"
        ref="form"
        hide-required-asterisk="true"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input placeholder="请输入账号" v-model="loginForm.username">
            <template #prefix>
              <i-ep-user></i-ep-user>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="loginForm.password"
            ><template #prefix> <i-ep-lock></i-ep-lock> </template
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="handleLogin" auto-insert-space
            >登录</el-button
          >
          <el-button @click="isRegister = true" type="primary" auto-insert-space>
            注册
          </el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="账号注册" name="first" v-else>
      <el-form
        label-position="middle"
        label-width="100px"
        :model="loginForm"
        :rules="rules"
        size="large"
        ref="form"
        hide-required-asterisk="true"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input placeholder="请输入账号" v-model="loginForm.username">
            <template #prefix>
              <i-ep-user></i-ep-user>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="loginForm.password"
            ><template #prefix> <i-ep-lock></i-ep-lock> </template
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="isRegister = false" type="info" auto-insert-space round
            >返回</el-button
          >
          <el-button @click="handleRegister" type="primary" auto-insert-space>
            注册
          </el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="手机登录" name="second">
      <el-form
        label-position="middle"
        label-width="100px"
        :model="loginForm"
        :rules="rules"
        size="large"
        hide-required-asterisk="true"
        style="max-width: 460px"
        class="login_form"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input placeholder="请输入手机号" v-model="loginForm.phone">
            <template #prefix>
              <i-ep-user></i-ep-user>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="loginForm.password"
            ><template #prefix> <i-ep-lock></i-ep-lock> </template
          ></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="二维码登录" name="third">
      <div class="qr-code"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.demo-tabs {
  height: 18vw;
  width: 30vw;
  padding: 0, 10px, 20px;
  .login-form {
    max-width: 560px;
    margin-top: 20px;
  }
  .qr-code {
    height: 300px;
    width: 300px;
  }
}
.demo-tabs > .el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

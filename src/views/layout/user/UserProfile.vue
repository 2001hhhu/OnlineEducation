<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/modules/user.js'
import { updateUserInfoService } from '@/api/user.js'
import { ElMessage } from 'element-plus'

//获取用户个人信息
const userinfo = ref({})
const userStore = useUserStore()
userStore.getUser()
userinfo.value = userStore.user

//编辑用户信息的对话框
const dialogFormVisible = ref(false)

//编辑个人信息的表单
const squareUrl = ref(
  'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
)
const radio_gender = ref('1')
const userForm = ref({
  avatar: '',
  nickname: '',
  password: '',
  name: '',
  phone: '',
  email: '',
  gender: '',
  school: '',
  grade: '',
  speciality: '',
  colleage: '',
  address: ''
})
userForm.value = userinfo.value
const rules = {
  nickname: [{ required: true, message: '昵称不能为空', tigger: 'blur' }],
  password: [
    { required: true, message: '请输入正确的密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是6-15位非空字符', trigger: 'blur' }
  ],
  phone: [
    {
      pattern: /^13[0-9]\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  email: [
    {
      pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
      message: '请输入正确的邮箱',
      tigger: 'blur'
    }
  ]
}
//处理提交按钮
const handleCommmit = async () => {
  // await userForm.value.validate()
  await updateUserInfoService(userForm.value.id, userForm.value)
  userStore.getUser()
  ElMessage({
    message: '提交成功.',
    type: 'success'
  })
  console.log(userStore.user)
}

// 处理头像图片上传
const isChangeAvatar = ref(false)
const imageUrl = ref('')

const handleAvatarSuccess = (response) => {
  console.log(response)
  // imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  ElMessage.success('上传成功')
}

const handleUpload = (uploadFile) => {
  console.log(uploadFile)
}

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

<template>
  <div class="wrapper">
    <el-card class="user-card">
      <template #header>
        <div class="card-header">
          <strong>简介</strong>
          <el-button type="primary" @click="dialogFormVisible = true">编辑</el-button>
        </div>
      </template>
      <el-descriptions class="user-info-description" :column="3" :size="size" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-picture />
              </el-icon>
              头像
            </div>
          </template>
          {{ userinfo.avatar }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-user />
              </el-icon>
              网名
            </div>
          </template>
          {{ userinfo.nickname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-UserFilled />
              </el-icon>
              姓名
            </div>
          </template>
          {{ userinfo.name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-male />
              </el-icon>
              <el-icon :style="iconStyle">
                <i-ep-female />
              </el-icon>
              性别
            </div>
          </template>
          {{ userinfo.gender === 1 ? '男' : '女' }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-iphone />
              </el-icon>
              手机
            </div>
          </template>
          {{ userinfo.phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-message />
              </el-icon>
              邮箱
            </div>
          </template>
          {{ userinfo.email }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-location />
              </el-icon>
              IP地址
            </div>
          </template>
          {{ userinfo.IP }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-school />
              </el-icon>
              学校
            </div>
          </template>
          <el-tag size="small">School</el-tag>
          {{ userinfo.school }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-tickets />
              </el-icon>
              年级
            </div>
          </template>
          {{ userinfo.grade }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-tickets />
              </el-icon>
              学院
            </div>
          </template>
          {{ userinfo.colleage }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-tickets />
              </el-icon>
              专业
            </div>
          </template>
          {{ userinfo.speciality }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-office-building />
              </el-icon>
              住址
            </div>
          </template>
          {{ userinfo.address }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <i-ep-Calendar />
              </el-icon>
              注册日期
            </div>
          </template>
          {{ userinfo.reqistration }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>

  <!-- 编辑弹窗 -->
  <div class="edit-dialog">
    <el-dialog v-model="dialogFormVisible" title="编辑个人信息">
      <el-form :model="userForm" :rules="rules" hide-required-asterisk="true">
        <div class="dialog-body">
          <div class="dialog-left">
            <el-form-item class="avatar" label="头像" prop>
              <div v-if="!isChangeAvatar">
                <el-image v-if="userinfo.url"></el-image>
                <el-image :src="squareUrl" v-else></el-image>
              </div>
              <div v-else>
                <el-upload
                  class="avatar-uploader"
                  action="http://localhost:3000/imageUrl"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :on-change="handleUpload"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar-2" />
                  <el-icon v-else class="avatar-uploader-icon"><i-ep-Plus /></el-icon>
                </el-upload>
              </div>
              <div>
                <el-button
                  type="primary"
                  size="small"
                  radius
                  @click="isChangeAvatar = !isChangeAvatar"
                  >更换头像</el-button
                >
              </div>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="userForm.password" show-password />
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="userForm.nickname" />
            </el-form-item>
            <el-form-item label="手机" prop="phone">
              <el-input v-model="userForm.phone" />
            </el-form-item>
            <el-form-item label="性别" prop>
              <el-radio-group v-model="radio_gender" class="ml-4">
                <el-radio label="1" size="small">男</el-radio>
                <el-radio label="0" size="small">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <div class="dialog-right">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="userForm.email" />
            </el-form-item>
            <el-form-item label="学校" prop>
              <el-input v-model="userForm.school" />
            </el-form-item>
            <el-form-item label="年级" prop>
              <el-input v-model="userForm.grade" />
            </el-form-item>
            <el-form-item label="学院" prop>
              <el-input v-model="userForm.colleage" />
            </el-form-item>
            <el-form-item label="专业" prop>
              <el-input v-model="userForm.speciality" />
            </el-form-item>
            <el-form-item label="住址" prop>
              <el-input v-model="userForm.address" />
            </el-form-item>
          </div>
        </div>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCommmit"> 提交 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.user-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      font-size: 18px;
    }
    span {
      font-size: 18px;
    }
  }
  .user-info-description {
    .cell-item {
      display: flex;
      align-items: center;
      .el-icon {
        margin-right: 5px;
      }
    }
  }
}
.edit-dialog {
  .dialog-body {
    display: flex;
    overflow: auto;
    .dialog-left {
      flex: 1;
      margin-right: 20px;
      .avatar {
        .el-button {
          margin-left: 20px;
        }
      }
      .el-form-item {
        .el-image {
          display: block;
          margin-bottom: 5px;
        }
      }
    }
    .dialog-right {
      flex: 1;
      overflow: hidden;
    }
  }
}
.avatar-uploader {
  .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }
}

.avatar-uploader {
  .el-upload:hover {
    border-color: var(--el-color-primary);
  }
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  text-align: center;
}
</style>

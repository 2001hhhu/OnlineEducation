<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { useCourseStore, useUserStore } from '@/stores'
import { useRoute } from 'vue-router'

// 获取用户
const userStore = useUserStore()
const userinfo = ref({})
userinfo.value = userStore.user

// 设置总评
const evaluate = ref()
const texts = ['oops', 'disappointed', 'normal', 'good', 'great']
// const showEvaluate = () => {
//   console.log(evaluate.value)
// }

// 设置评价内容
const textarea = ref('')
// 评价内容效验
const isInputInvalid = ref(false)
const inputErrorMessage = ref('')
const timer = ref()
const validateInput = () => {
  if (textarea.value === '') {
    isInputInvalid.value = true
    inputErrorMessage.value = '内容不能为空'
    timer.value = setTimeout(() => {
      isInputInvalid.value = false
    }, 2000)
  }
}
onBeforeUnmount(() => {
  clearTimeout(timer.value)
})

// 获取评价
const route = useRoute()
const courseId = route.query.id
const courseStore = useCourseStore()
// 判断用户是否进行了评价 有则显示评价 没有则显示提交评价
const isEvaluate = ref()
// 存储用户的评价
const userevaluate = ref({})
// 存放用户的总评
const evaluateValue = ref('0')
courseStore.getUserEvaluate(userinfo.value.id, courseId)
userevaluate.value = courseStore.userEvaluate[0]
if (courseStore.userEvaluate.length !== 0) {
  isEvaluate.value = true
  evaluateValue.value = userevaluate.value.general
} else {
  isEvaluate.value = false
}

// 获取课程信息并渲染到页面
courseStore.getCourseInfo(courseId)
const courseInfo = ref({})
courseInfo.value = courseStore.courseInfo

// 处理提交按钮把评价提交给后端
let getTime = new Date().getTime()
let time = new Date(getTime)
const date = ref()
const nowDate = (time) => {
  let year = time.getFullYear() // 年
  let month = (time.getMonth() + 1).toString().padStart(2, '0') // 月
  let day = time.getDate().toString().padStart(2, '0') // 日
  return year + '-' + month + '-' + day
}
date.value = nowDate(time)
const handleCommit = () => {
  let user_evaluate = {
    course: Number(courseId),
    user: userinfo.value.id,
    general: evaluate.value,
    commnet: textarea.value,
    date: date.value
  }
  courseStore.putEvaluate(user_evaluate)
  courseStore.getUserEvaluate(userinfo.value.id, courseId)
  userevaluate.value = courseStore.userEvaluate[0]
  evaluateValue.value = userevaluate.value.general
  isEvaluate.value = true
}

// 处理删除按钮
const handleDelete = () => {
  courseStore.deleteEvaluate(userinfo.value.id, courseId)
  isEvaluate.value = false
}

// 处理更新按钮
const handleUpdate = () => {
  console.log()
}
</script>

<template>
  <div class="course-evaluate" v-if="!isEvaluate">
    <h3>对课程的评价</h3>
    <div class="evaluate-content">
      <p>总评</p>
      <el-rate
        v-model="evaluate"
        :texts="texts"
        show-text="true"
        allow-half="true"
        clearable="true"
        size="large"
      />
      <p>评价内容</p>
      <el-input
        v-model="textarea"
        minlength="5"
        maxlength="200"
        show-word-limit="true"
        :autosize="{ minRows: 4, maxRows: 6 }"
        @blur="validateInput"
        type="textarea"
        placeholder="可以从课程内容、授课方式的角度出发，或分享你学到的内容"
      />
      <span class="worning" v-if="isInputInvalid">{{ inputErrorMessage }}</span>
      <div class="evaluate-button">
        <el-button disabled>保存</el-button>
        <el-button type="primary" @click="handleCommit">提交</el-button>
      </div>
    </div>
  </div>
  <div class="course-evaluate" v-else>
    <h3>我的历史评价</h3>
    <div class="user-evaluate">
      <div class="user-avatar">
        <el-avatar :size="50" :src="circleUrl" />
      </div>
      <div class="evaluate-content2">
        <div class="content-head">
          <span>{{ userinfo.nickname }}</span>
          <el-rate
            v-model="evaluateValue"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points"
          />
        </div>
        <div class="content-body">
          <span>{{ userevaluate.comment }}</span>
          <span class="content-date">发表于{{ userevaluate.date }}</span>
        </div>
      </div>
    </div>
    <div class="content-button">
      <el-button type="danger" size="small" @click="handleDelete" disabled
        >删除</el-button
      >
      <el-button type="primary" size="small" @click="handleUpdate" disabled
        >修改</el-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.course-evaluate {
  padding: 24px 32px;
  background-color: #fff;
  overflow: hidden;
  .evaluate-content {
    overflow: hidden;
    padding-bottom: 20px;
    .el-input {
      max-width: 300px;
    }
    .evaluate-button {
      float: right;
      margin-top: 20px;
    }
    .worning {
      font-size: 12px;
      color: red;
    }
  }
  .user-evaluate {
    display: flex;
    margin-top: 50px;
    .evaluate-content2 {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .content-head {
        margin-bottom: 10px;
        .el-rate {
          margin-left: 10px;
        }
      }
      .content-body {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .content-date {
          font-size: 13px;
          color: #999999;
          margin-top: 20px;
        }
      }
    }
  }
  .content-button {
    float: right;
    margin-bottom: 20px;
  }
}
</style>

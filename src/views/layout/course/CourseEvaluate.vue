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
const courseStore = useCourseStore()
// 判断用户是否进行了评价 有则显示评价 没有则显示提交评价
const isEvaluate = ref()
// 存储用户的评价
const userevaluate = ref({})
// 存放用户的总评
const evaluateValue = ref()
courseStore.getUserEvaluate(userinfo.value.id, 1)
userevaluate.value = courseStore.userEvaluate
if (userevaluate.value) {
  isEvaluate.value = true
} else {
  isEvaluate.value = false
}
evaluateValue.value = userevaluate.value.general

// 获取课程信息并渲染到页面
const route = useRoute()
const courseId = route.query.id
courseStore.getCourseInfo(courseId)
const courseInfo = ref({})
courseInfo.value = courseStore.courseInfo
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
        <el-button>保存</el-button>
        <el-button type="primary">提交</el-button>
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
      <el-button type="danger" size="small">删除</el-button>
      <el-button type="primary" size="small">修改</el-button>
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

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

// 获取课程信息
const route = useRoute()
const courseId = route.query.id

// 处理三个input
const inpputModel = ref('')
const inputTitle = ref('')
const inputContent = ref('')

// 处理提交
const handleCommit = () => {
  ElMessage.SuccessFilled('提交成功')
}
</script>

<template>
  <div class="discussion-container">
    <div class="discussion-breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: `/course/discuss?id=${courseId}` }"
          >课程讨论</el-breadcrumb-item
        >
        <el-breadcrumb-item>讨论区</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="discussion-content">
      <div>
        <p>所属讨论板块</p>
        <el-input
          v-model="inpputModel"
          style="max-width: 20vw"
          placeholder="请选择所属板块"
        ></el-input>
      </div>
      <div>
        <p>标题</p>
        <el-input
          v-model="inputTitle"
          style="max-width: 35vw"
          placeholder="请输入标题"
        ></el-input>
      </div>
      <div>
        <p>内容</p>
        <el-input
          v-model="inputContent"
          style="max-width: 35vw"
          :rows="6"
          type="textarea"
        ></el-input>
      </div>
      <div class="discussion-button">
        <el-button type="primary" @click="handleCommit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.discussion-container {
  padding: 24px 20px;
  background-color: #fff;
  .discussion-breadcrumb {
    border-bottom: 1px solid rgb(238, 238, 238);
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .discussion-content {
    .discussion-button {
      margin-top: 15px;
    }
  }
}
</style>

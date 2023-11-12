<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import echarts from '@/utils/echarts.js'

const domRef = ref()
const props = defineProps({
  options: Object,
  width: String,
  height: String
})

//设置防抖，保证无论拖动窗口大小，只执行一次获取浏览器宽高的方法
const debounce = (fun, delay) => {
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fun()
    }, delay)
  }
}

// 绘制图表
let chart
const resizeHandler = () => {
  chart.resize()
}
const cancalDebounce = debounce(resizeHandler, 500)
const initVideo = () => {
  chart = echarts.init(domRef.value)
  // 重绘图表函数

  window.addEventListener('resize', cancalDebounce)
  chart.setOption(props.options)
}

onMounted(() => {
  initVideo()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', cancalDebounce)
  chart.dispose()
})

// watch(
//   () => {
//     chart.setOption(props.options)
//   },
//   { deep: true }
// )
</script>

<template>
  <div ref="domRef" class="echart"></div>
</template>

<style lang="scss">
.echart {
  height: 100%;
  width: 100%;
}
</style>

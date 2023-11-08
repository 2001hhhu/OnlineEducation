<script setup>
import { computed, onMounted, ref } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'

// const MyVideoProps = {
//   /** 视频地址 */
//   src: '',
//   width: '',
//   height: ''
// }

// 获取视频地址
const props = defineProps({
  src: String,
  wdith: String,
  height: String
})

// video标签
const videoRef = ref()

// video实例对象
const videoPlayer = ref()
const videoWrapStyles = computed(() => {
  return {
    width: props.wdith || '100%',
    height: props.height || '100%'
  }
})

// 初始化videojs
const initVideo = () => {
  const options = {
    language: 'zh-CN', // 设置语言
    controls: true, // 是否显示控制条
    preload: 'auto', // 预加载
    autoplay: false, // 是否自动播放
    fluid: false, // 自适应宽高
    src: props.src // 路径
  }
  if (videoRef.value) {
    videoPlayer.value = videojs(videoRef.value, options, onPlayerReady)
  }
}

// video初始化完成的回调函数
const onPlayerReady = () => {}
onMounted(() => {
  initVideo()
})
</script>

<template>
  <div :style="videoWrapStyles">
    <video id="my-player" ref="videoRef" class="video-js w-full h-full">
      <source :src="src" />
    </video>
  </div>
</template>
<style lang="scss" scoped>
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
</style>

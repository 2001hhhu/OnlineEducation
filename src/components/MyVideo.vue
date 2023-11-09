<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
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
    src: props.src, // 路径
    controlBar: {
      // 设置控制条
      // currentTimeDispaly: true,
      // timeDivider: true,
      // durationDisplay: true,
      // pictureInPictureToggle: false,
      // remainingTimeDisplay: false,
      volumePanel: {
        inline: false
      },
      children: [
        { name: 'playToggle' }, // 播放/暂停按钮
        { name: 'currentTimeDisplay' }, // 视频当前已播放时间
        { name: 'progressControl' }, // 播放进度条
        { name: 'durationDisplay' }, // 视频播放总时间
        {
          // 倍速播放
          name: 'playbackRateMenuButton',
          playbackRates: [0.5, 1, 1.5, 2]
        },
        {
          name: 'volumePanel', // 音量控制
          inline: false // 不使用水平方式
        },
        { name: 'FullscreenToggle' } // 全屏
      ]
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }
  if (videoRef.value) {
    videoPlayer.value = videojs(videoRef.value, options, onPlayerReady)
    // videojs(videoRef.value).ready(() => {
    //   // video监听
    //   videoPlayer.value.on()
    // })
  }
}

// video初始化完成的回调函数
const onPlayerReady = () => {}
onMounted(() => {
  initVideo()
})

// 销毁video实例
onBeforeUnmount(() => {
  videojs(videoRef.value).dispose()
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
.video-js {
  /* 给.video-js设置字体大小以统一各浏览器样式表现，因为video.js采用的是em单位 */
  font-size: 14px;
}
.video-js button {
  outline: none;
}
.video-js.vjs-fluid,
.video-js.vjs-16-9,
.video-js.vjs-4-3 {
  /* 视频占满容器高度 */
  height: 100%;
  background-color: #161616;
}
.vjs-poster {
  background-color: #161616;
}
.video-js .vjs-big-play-button {
  /* 中间大的播放按钮 */
  font-size: 2.5em;
  line-height: 2.3em;
  height: 2.5em;
  width: 2.5em;
  -webkit-border-radius: 2.5em;
  -moz-border-radius: 2.5em;
  border-radius: 2.5em;
  background-color: rgba(115, 133, 159, 0.5);
  border-width: 0.12em;
  margin-top: -1.25em;
  margin-left: -1.75em;
}
.video-js.vjs-paused .vjs-big-play-button {
  /* 视频暂停时显示播放按钮 */
  display: block;
}
.video-js.vjs-error .vjs-big-play-button {
  /* 视频加载出错时隐藏播放按钮 */
  display: none;
}
.vjs-loading-spinner {
  /* 加载圆圈 */
  font-size: 2.5em;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  margin-top: -1em;
  margin-left: -1.5em;
}
.video-js .vjs-control-bar {
  /* 控制条默认显示 */
  display: flex;
}
.video-js .vjs-time-control {
  display: block;
}
.video-js .vjs-remaining-time {
  display: none;
}

.vjs-button > .vjs-icon-placeholder:before {
  /* 控制条所有图标，图标字体大小最好使用px单位，如果使用em，各浏览器表现可能会不大一样 */
  font-size: 22px;
  line-height: 1.9;
}
.video-js .vjs-playback-rate .vjs-playback-rate-value {
  line-height: 2.4;
  font-size: 18px;
}
/* 进度条背景色 */
.video-js .vjs-play-progress {
  color: #ffb845;
  background-color: #ffb845;
}
.video-js .vjs-progress-control .vjs-mouse-display {
  background-color: #ffb845;
}
.vjs-mouse-display .vjs-time-tooltip {
  padding-bottom: 6px;
  background-color: #ffb845;
}
.video-js .vjs-play-progress .vjs-time-tooltip {
  display: none !important;
}
</style>

<template>
    <div class="video-player">
    <video-player class="vjs-custom-skin" :options="playerOptions" @ready="playerReadied"></video-player>
    </div>
</template>

<script>
import { VideoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
    components: {
    VideoPlayer
  },
  data () {
  return {
    playerOptions: {
      autoplay: true,
      controls: true,
    //   sources: [{
    //     type: "video/mp4",
    //     src: "/"
    //   }],
      poster: "/src/assets/image/图1.jpg",
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      muted: false,
      notSupportedMessage:'xxxxxxxx',
      // width:'600px',
      height:'300px'
    }
  }
}
}
</script>

<style>
/* CSS 文件 */

.video-player {
  /* width: 100%;
  max-width: 900px; */
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.video-js {
  /* 修改播放器的主题颜色 */
  --vjs-icon-color-before: #fff;
  --vjs-icon-color-after: #fff;
  --vjs-error-color: #f44336;
  --vjs-text-color: #fff;
  --vjs-background-color: #424242;
  --vjs-control-bar-color: #424242;
  --vjs-progress-control-color: #424242;
  --vjs-slider-bar-color: #ff4081;
  --vjs-slider-handle-before-color: #ff4081;
  --vjs-slider-handle-after-color: #ff4081;
  --vjs-play-progress-color: #ff4081;
  --vjs-load-progress-color: #ff4081;
  --vjs-button-color-before: #fff;
  --vjs-button-color-after: #fff;
}
/* .vjs-custom-skin .vjs-big-play-button {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
  position: absolute;
} */
</style>
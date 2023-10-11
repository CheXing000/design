<template>
  <el-carousel :interval="10000" type="card" height="400px">
    <el-carousel-item v-for="(item,index) in items" :key="index">
      <el-image :src="item" alt="" fit="contain" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// import {L2Dwidget} from 'live2d-widget'
export default {
  data(){
    return{
      items:[
                '/src/assets/image/图1.jpg',
                '/src/assets/image/图2.jpg',
                '/src/assets/image/图3.jpg',
                
                // 更多图片...
            ],
    }
  },
  // created() {
  //       setTimeout(function () {
  //           L2Dwidget.init({
  //               model: {
  //                   jsonPath: '/src/assets/live2d/live2d-widget-model-wanko/assets/wanko.model.json',
  //               }
  //           });
  //       },1000);
  //   }
}

</script >  

  <style>
  /* .el-carousel__item img {
    opacity: 0.75;
    width: 100%;
  } */
  
  /* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  } */
  </style>
  
  
  
  
  
  
  
<!-- 
< script >
import axios from 'axios';
export default {
  mounted: function () {
    this.$axios.post('/test', testData, {
      params: {
        zentaosid: this.sessionID,
      }
    })
      .then(res => {
        this.getOrderBugSearchList()
      }).catch(err => {
        console.log(err)
      })

  }
}

</script> -->
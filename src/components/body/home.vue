<template>
  <div class="block text-center" >
    <el-carousel height="auto" autoplay indicator-position="outside">
      <el-carousel-item v-for="(item,index) in items" :key="index" style="height: 700px;">
        <el-image :src="item" id="home-img" fit="scale-down" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default{
  data(){
    return{
      items:[
                '/src/assets/image/图1.jpg',
                '/src/assets/image/图2.jpg',
                '/src/assets/image/图3.jpg',
                
                // 更多图片...
            ],
    }
  }
}
</script>


<style>
.carousel-item {
  /* color: #475669; */
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fcffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}
#home-img{
  width: 75%;
  height: 100%;
}

</style>

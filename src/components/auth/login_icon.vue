<template>
  <div  class="demo-type">
    <div v-if="showLogin">
      <el-avatar :icon="UserFilled"  @click="login"/>
    </div>
    <div v-if="showuser" class="demo-type">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <!-- <div>
      <el-avatar> user </el-avatar>
    </div> -->
  </div>
</template>

<script lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
export default {
  setup(){
      return{
        UserFilled
      }
  },
  data() {
    return{
      showLogin:'',
      showuser:''
    }
  },
  methods:{
    login(){
      this.$router.push({path: '/login',query: {redirect: this.$route.fullPath } })
    },
    checkToken(){
    const token = sessionStorage.getItem('eleToken');
    if(token){
      this.showLogin=false
      this.showuser=true
    }
    else{
      this.showLogin=true
      this.showuser=false
    }
  },
  },
  created() {
    this.checkToken()
  },
}
</script>

<style >
/* .demo-type {
  position: absolute;
  top: 5.5%;
  left: 97.5%;
  display: block;

} */

.demo-type>div {
  flex: 1;
  text-align: center;
}

.demo-type>div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>

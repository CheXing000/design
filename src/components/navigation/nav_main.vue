<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0"><img src="/src/assets/image/yuanshen_logo.jpg" id="logo"></el-menu-item>
      <div class="demo-input-size" >
        <el-input v-model="input1" class="w-50 m-2" size="large" placeholder="Please Input" :prefix-icon="Search" />
      </div>
    <div class="flex-grow" />
    <el-menu-item index="2">
      <RouterLink to="/Home">Home</RouterLink>
    </el-menu-item>
    <el-sub-menu index="3">
      <template #title>GoWay</template>
      <el-sub-menu index="3-1">
        <template #title>
          <RouterLink to="/Doc">一起金铲铲</RouterLink>
        </template>
        <el-menu-item index="3-1-1"><RouterLink to="/Doc/item_one">
          item one
        </RouterLink></el-menu-item>
        <el-menu-item index="3-1-2"><RouterLink to="/Doc/item_two">
          item two
        </RouterLink></el-menu-item>
        <el-menu-item index="3-1-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3-2">
        <template #title>
          <RouterLink to="/Duc">原神启动</RouterLink>
        </template>
        <el-menu-item index="3-2-1">
          <RouterLink to="/Duc/itme_one">item one</RouterLink>
        </el-menu-item>
        <el-menu-item index="3-2-2">
          <RouterLink to="/Duc/itme_two">item two</RouterLink>
        </el-menu-item>
        <el-menu-item index="3-2-3">
          <RouterLink to="/Duc/itme_three">item three</RouterLink>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3-3">
        <RouterLink to="/About">About</RouterLink>
      </el-menu-item>
      <el-menu-item index="3-4">
        <RouterLink to="/Help">Help</RouterLink>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <login_icon></login_icon>
      </template>
      <el-menu-item index="4-1">退出登入</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
  
<script lang="ts">
import login_icon from '../auth/login_icon.vue';
import { ref } from 'vue'
const activeIndex = ref('1')
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
export default {
  setup() {
    return {
      input1,
      activeIndex,
      handleSelect,
      Search,
    }
  },
  components: {
    login_icon
  },
}
</script>
  
<style>
.flex-grow {
  flex-grow: 1;
}

#logo {
  width: 55px;
  height: 55px;
}
.demo-input-size{
  width: 400px;
}
.el-input{
  top:10px;
}
</style>
  
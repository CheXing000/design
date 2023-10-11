<script setup>
import nav_main from './components/navigation/nav_main.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <nav_main />
      </el-header>
      <el-main >
        <RouterView></RouterView>
      </el-main>
      <el-footer>
        <p>这儿是页面底部</p>
      </el-footer>
    </el-container>
  </div>
</template>


<style>
</style>


<template>
  <Selection_role @get_role="get_yuanshen_role"></Selection_role>
  <el-divider />
  <el-space direction="vertical" alignment="start" :size="30" style="width: 900px; justify-content: center">
    <el-space wrap size="large">
      <el-card v-for="i in displayedItems" :key="i" class="box-card" style="width: 180px,height:230px">
        <template #header>
          <div class="card-header">
            <el-image style="width: 160px; height: 150px" :src="img_path" fit="cover" />
            <!-- <RouterLink :to="{path: '/Duc/itme_one/card_info'}" >Operation button</RouterLink> -->
          </div>
        </template>
        <div class="role-attr">
          <el-button class="button" text @click="to_link"><strong>{{ role[i-1].role_name }}</strong></el-button>
          <div class="role-p">
        <p>神之眼: &nbsp;{{  role[i-1].role_attributes }}</p>
        <P>武器: &nbsp;{{ role[i-1].weapon_type }}</P>
        <p>国度: &nbsp;{{ role[i-1].role_country }}</p>
      </div>
      </div>
      </el-card>
    </el-space>
  </el-space>
  <el-pagination  @current-change="handlePageChange" :current-page="currentPage" :page-size="pageSize"
   background layout="prev, pager, next" :total="items.length">
  </el-pagination>
</template>
<script lang="ts" >
import { ref } from 'vue'
import Selection_role from './selection_role.vue'
const size = ref('default')
export default {
  setup() {
    return {
      size,
      ref,
      
    }
  },
  components:{Selection_role},
  data() {
    return {
      items: [],
      role:[{'role_name':'','role_attributes':'','weapon_type':'','role_country':''}],
      img_path:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      pageSize: 12,
      currentPage: 1,
    }
  },
  computed: {
    displayedItems() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.currentPage * this.pageSize;
      return this.items.slice(start, end);
    },
  },
  methods: {
    to_link() {
      this.$router.push({ path: '/Duc/itme_one/card_info', query: { redirect: this.$route.fullPath } })
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    get_yuanshen_role(data){
      this.items=data.role_num
      this.role = data.role
      console.log(this.role[0])
    }
  },
  beforeRouteLeave(to, from, next) {
    // Save current page number before leaving
    sessionStorage.setItem('paginationPage', this.currentPage);
    next();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // Retrieve saved page number when entering
      const savedPage = sessionStorage.getItem('paginationPage');
      if (savedPage) {
        vm.currentPage = Number(savedPage);
      }
    });
  },
}
</script>

<style scoped>
.el-pagination {
display: flex;
justify-content: center;
}
.el-space{
  justify-content: center
}
.role-p p{
  font-size: 13px;
  padding: 0px;
  height: 15px;
  margin-top: 10px;
}
.role-p{
  margin-top: -20px;
}
.role-attr button{
  font-size: 15px;
  margin-top: -20px;
}
.role-attr{
margin: -10px;
}
.box-card{
  background-color: bisque;
  padding: 0px;
}
.card-header{
  margin: -16px;
}
</style>
  
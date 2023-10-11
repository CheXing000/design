<template>
    <h2>原神角色配队</h2>
    <div>
    <div v-for="(items, index) in displayedItems" :key="index">
        <el-divider>
            <el-icon>
                <StarFilled />
            </el-icon>
        </el-divider>
        <div class="photo-main">
            <P>xxxxxxxx</P>
            <el-space wrap>
                <el-card v-for="(item, index) in items" :key="index" class="box-card" style="width: 160px">
                    <template #header>
                        <el-image style="width: 160px; height: 150px" :src="item.path" fit="cover" />
                    </template>
                    <p>{{ item.name }}</p>
                </el-card>
                <p style="width: 50px;"></p>
                <RouterLink to="/Duc/itme_three/role_detail">查看详情</RouterLink>
            </el-space>
        </div>
    </div>
    <el-pagination  @current-change="handlePageChange" :current-page="currentPage" :page-size="pageSize"
   background layout="prev, pager, next" :total="item_group.length">
  </el-pagination>
</div>
</template>


<script>
import { StarFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
const count = ref(0)
const load = () => {
    count.value += 2
}
export default {
    setup() {
        return {
            load
        }
    },
    components: {
        StarFilled,
    },
    data() {
        return {
            item_group: [
                [
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' }
                ],
                [
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' }
                ],
                [
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' }
                ],
                [
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' }
                ],
                [
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' }
                ],
                [
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' },
                    { 'path': 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'name': '神里凌华' }
                ],
            ],
            pageSize: 5,
            currentPage: 1,
        }
    },
    computed: {
        displayedItems() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = this.currentPage * this.pageSize;
            return this.item_group.slice(start, end);
        },
    },
    methods: {
        handlePageChange(page) {
            this.currentPage = page;
        },
    },
    beforeRouteLeave(to, from, next) {
        // Save current page number before leaving
        sessionStorage.setItem('RolepaginationPage', this.currentPage);
        next();
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // Retrieve saved page number when entering
            const savedPage = sessionStorage.getItem('RolepaginationPage');
            if (savedPage) {
                vm.currentPage = Number(savedPage);
            }
        });
    },

}
</script>


<style>
.photo-main {
    height: 260px;
}

.photo-main .el-card__body {
    height: 50px;
    padding: 1px;
}

.photo-main .el-card__header {
    padding: 1px;
}
.el-pagination {
display: flex;
justify-content: center;
}
</style>
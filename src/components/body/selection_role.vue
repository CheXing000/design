<template>
    <div class="m-4">
        <p>选择你想要查看的角色</p>
        <el-cascader v-model="value" :options="options" :props="props1" @change="handleChange" />
    </div>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus'
export default {
    data() {
        return {
            vaule: '',
            options: [],
            props1: {
                checkStrictly: true,
            }
        }
    },
    methods: {
        handleChange(value) {
            axios.get('/api/get_yuanshen_role', {
                params: {
                    'role': JSON.stringify(value)
                }
            }).then(res => {
                this.$emit('get_role',{'role_num':res.data.role_num,'role':res.data.role})
            })
                .catch(err => {
                    ElMessage.error('获取角色失败')
                })
        },
        get_role_list_for_selection() {
            axios.get('/api/get_yuanshen_role_list')
                .then(res => {
                    this.options = res.data.role_list
                }).catch(err => {
                    ElMessage.error('获取角色列表失败')
                })
        }
    },
    created(){
        this.get_role_list_for_selection()
    },
    mounted() {
        this.get_role_list_for_selection()
        this.handleChange()
    }
}
</script>

<style lang="scss" scoped></style>
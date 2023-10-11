<template>
    <div class="user-msg">
        <br>
        <el-badge :value="user.unread" :max="99" class="msg-num" v-for="user in users">
            <el-button :id="user" @click="get_msg($event)" :plain="true">{{ user.other_user }}</el-button>
            <div style="height: 15px;">
            </div>
        </el-badge>


    </div>
</template>

<script>
import axios from 'axios';
import { ElMessage } from 'element-plus'
export default {
    data() {

        return {
            users: [],
            conversation_id:''
        }
    },
    methods: {
        get_msg(event) {
            var user_name = event.target.innerText
            for(let i = 0; i < this.users.length; i++){
                if (this.users[i].other_user===user_name){
                    var conversation_id = this.users[i].conversation_id
                
                }
            }
            axios.get('/api/get_msg', {
                params: {
                    'conversation_id': conversation_id,
                    'received_name':user_name
                }
            })
                .then(res => {
                    this.get_unread()
                    this.$emit('user_msgs', { 'msg': res.data.msg, 'username': user_name })
                    localStorage.setItem('msg_user_name', user_name)
                    localStorage.setItem('conversation_id',conversation_id)
                    this.$router.push({ path: this.$route.fullPath, query: { redirect: user_name } })
                }).catch(err => {
                    ElMessage.error('消息加载失败！')
                    console.log(err)
                })
        },
        get_unread(){
            var username = localStorage.getItem('user')
            axios.get('/api/get_unread_msg', {
                params: {
                    'username': username
                }
            })
                .then(res => {
                    console.log(res.data.msg)
                    this.users = res.data.msg
                }).catch(err => {
                    
                    console.log(err)
                })
        }

    },
    created(){
        this.get_unread()
    }
}
</script>

<style lang="scss" scoped>
.user-msg {
    width: 300px;
    height: 450px;
    position: absolute;
    background-color: antiquewhite;
    top: 90px;
    left: 1100px;
    border-radius: 4px
}

.msg-num {
    width: 200px;

}

.msg-num button {
    width: 200px;
}</style>
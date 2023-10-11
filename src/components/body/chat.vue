<template>
    <el-card class="chat-card">
        <p style="font-size: 20px;">{{ username }}</p>
        <el-divider />
        <el-container>
            <div ref="scrollContainer" class="text-item" style="overflow-y: auto; height: 380px; " id="chat-main">
                <el-main>
                    <div v-for="message in messages" :key="message.id" :class="message.type">
                        <el-avatar :icon="UserFilled" style="margin: 10px;padding: 10px;"
                            v-show="message.type === 'received'" />
                        <p>{{ message.text }}</p>
                        <el-avatar :icon="UserFilled" style="margin: 10px;padding: 10px;"
                            v-show="message.type === 'sent'" />
                    </div>
                </el-main>
            </div>
            <el-footer>
                <el-input v-model="newMessage" :rows="4" type="textarea" placeholder="Please input"
                    @keyup.enter="sendMessages">
                </el-input>
                <el-button @click="sendMessages" class="sent-btn" type="primary" round native-type="submit">发送</el-button>
                <V3Emoji class="chat-emoji" size="mid" :recent="true" :skin="light" @clickEmoji="inputemoji">
                </V3Emoji>
            </el-footer>
        </el-container>
    </el-card>
    <User_msg @user_msgs="get_user_msg" ref="GetUnread"></User_msg>
</template>
  
<script>
import io from 'socket.io-client'
import V3Emoji from 'vue3-emoji'
import 'vue3-emoji/dist/style.css'
import axios from 'axios';
import User_msg from './user_msg.vue';
import { UserFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const textarea = ref('')
export default {
    setup() {
        return {
            UserFilled,
            textarea,

        };
    },
    data() {
        return {
            newMessage: '',
            messages: [],
            username: '',
        };
    },
    methods: {
        scrollToBottom() {
            this.$nextTick(() => {
                const container = this.$refs.scrollContainer;
                container.scrollTop = container.scrollHeight;
            });
        },
        sendMessage() {
            var sent_username = localStorage.getItem('user')
            var conversation_id = localStorage.getItem('conversation_id')
            if (this.newMessage.trim() !== '') {
                axios.post('/api/save_msg', 
                {
                    'received_name': this.username,
                    'msg':this.newMessage,
                    'sent_username':sent_username,
                    'conversation_id':conversation_id,
                }
            )
                .then(res => {
                    this.messages.push({ id: Date.now(), text: this.newMessage, type: 'sent' });
                    this.newMessage = '';
                    this.scrollToBottom();
                }).catch(err => {
                    ElMessage.error('消息发送失败！')
                    console.log(err)
                })
               
            }
            else{
                ElMessage.warning('请输入需要发送的内容')
                    
            }
        },

        get_user_msg(data) {
            this.username = data.username
            this.messages = data.msg
            this.scrollToBottom();
        },

        retry_msg() {
            var old_username = localStorage.getItem('msg_user_name')
            var conversation_id = localStorage.getItem('conversation_id')
            if (old_username === null) {
                this.username = 'john'
            }
            else {
                this.username = old_username
            }
            console.log(conversation_id)
            console.log(this.username)
            axios.get('/api/get_msg', {
                params: {
                    'received_name': this.username,
                    'conversation_id':conversation_id
                }
            })
                .then(res => {
                    this.messages = res.data.msg
                    this.scrollToBottom();
                }).catch(err => {
                    console.log(err)
                })
        },

        inputemoji(emoji){
            this.newMessage = this.newMessage+emoji
        },
        sendMessages() {
            this.socket.emit('message', { recipient: this.username, message: this.newMessage });
            this.messages.push({ id: Date.now(), text: this.newMessage, type: 'sent' });
            this.newMessage = '';
            this.scrollToBottom();
        }
    },
    components: { User_msg, V3Emoji},
    created() {
        var sent_username = localStorage.getItem('user')
        var conversation_id = localStorage.getItem('conversation_id')
        this.retry_msg()
        this.socket = io('http://127.0.0.1:5000',{ query: { username: sent_username },extraHeaders: {
          'Access-Control-Allow-Origin': '*',
          'sent_name':sent_username,
          'conversation_id':conversation_id // 设置跨域请求头
        }},);
        this.socket.on('message', (data) => {
            console.log('Message received: ' + data);
            if(data.conversation_id===conversation_id)
                this.messages.push({ id: Date.now(), text: data.msg, type: 'received' });
            this.$refs.GetUnread.get_unread()
            this.scrollToBottom();
        });
    },
};
</script>
  
<style scoped>
.received {
    display: flex;
    justify-content: flex-start;
}

.received p {
    text-align: left;
    background-color: #eee;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    width: fit-content;
    height: auto;
}

.sent {
    /* background-color: #0084ff; */
    display: flex;
    justify-content: flex-end;

}

.sent p {
    position: relative;
    text-align: right;
    background-color: #0084ff;
    color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    width: fit-content;
    height: auto;
}

.chat-card {
    width: 700px;
    height: 600px;
    margin-left: 20%;
    margin-right: auto;
    background-color: aqua;
}

.sent-btn {
    position: relative;
    left: 40%;
    bottom: 60%;
}
.chat-emoji{
    position: relative;
    left: 75%;
    bottom: 110%;
    width: 20px;
}
.pollup{
    bottom: 100px;
}
</style>
  
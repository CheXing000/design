<!-- RegisterModal.vue -->
<template>
  <div class="index-win">
  <div v-if="showRegisterForm" class="register-form">
    <h2 id="index-h">注册</h2>
    <p id="out_index" @click="out_index">X</p>
    <form @submit.prevent="register">
      <div class="group_form">
      <label for="username">用户名:</label>
      <input type="text" id="username" v-model="username" required>
    </div>
    <br>
      <div class="group_form">
      <label for="password">密&nbsp;&nbsp;&nbsp;码:</label>
      <input type="password" id="password" v-model="password" required>
    </div>
    <br>
      <div class="group_form">
      <label for="email">邮&nbsp;&nbsp;&nbsp;箱:</label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <br>
      <div class="group_form">
      <label for="phone">手机号:</label>
      <input type="tel" id="phone" v-model="phone" required>
    </div>
      <button type="submit" id="index_id">注册</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'RegisterModal',
  data() {
    return {
      showRegisterForm:true,
      username: '',
      password: '',
      email:'',
      phone:''
    }
  },
  mounted() {
      document.querySelectorAll('button:not([disabled])').forEach(button => {
        button.disabled = true;
      });
      document.querySelectorAll(['#index_id','#out_index']).forEach(button =>{
        button.disabled = false
      });
      
  },
  methods: {
    register(){
      console.log('注册成功');
      // 注册成功后可以重置表单或关闭浮窗
      this.username = '';
      this.password = '';
      this.email = '';
      this.phone = '';
      this.showRegisterForm = false;
      this.$router.push(this.$route.query.redirect)
    },
    out_index(){
      console.log(this.$route)
      document.querySelectorAll('button:not([disabled])').forEach(button => {
        button.disabled = false;
      });
      this.showRegisterForm = false;
      this.$router.push(this.$route.query.redirect)

    }
  }
}
</script>

<style>
.index-win{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 9999;
  justify-content: center;
  align-items: center;

}
.index-h{
  position: relative;
  top: 10%;
}
.register-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 350px;
  height: 450px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  float: left;
}

.group_form label{
  position: relative;
    right: 6%;
    font-size: 18px;
}
.group_form input{
  position: relative;
  right: 3%;
  width: 55%;
  height: 30px;
  border-radius: 15px;
  border: 0.1cap;
}
.register-form button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10%;
}

.register-form button:hover {
  background-color: #45a049;
}
#out_index{
  position: relative;
  width: 35px;
  height: 30px;
  left: 90%;
  bottom: 17%;
  font-size: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
#out_index:hover{
  background-color: red;
}
</style>
<template>
  <div>
    <div v-if="showLogin" class="login-overlay">
      <h2 id="item_id">Login in</h2>
      <div class="login-window">
        <!-- 登录窗口内容 -->
        <label id="user_la">用户名: </label>
        <input v-model="login_arg.username" id="user_in" type="text" placeholder="用户名">
        <label id="pwd_la">密&nbsp;&nbsp;&nbsp;码:</label>
        <input v-model="login_arg.password" id="pwd_in" type="password" placeholder="密码">
        <button @click="login" id="login_id">登录</button>
        <p id="out_login" @click="outlogin">X</p>
        <button @click="index" id="index_id">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      showLogin: true,
      login_arg: {
        username: '',
        password: ''
      }
    };
  },
  mounted() {
    document.querySelectorAll('button:not([disabled])').forEach(button => {
      button.disabled = true;
    });
    document.querySelectorAll(['#login_id', '#out_login', '#index_id']).forEach(button => {
      button.disabled = false
    });

  },
  methods: {
    outlogin() {
      this.showLogin = false
      document.querySelectorAll('button:not([disabled])').forEach(button => {
        button.disabled = false;
        this.$router.push(this.$route.query.redirect)
      });
    },
    login() {
      axios.post('/api/login', this.login_arg)
        .then(res => {
          console.log(res)
          if (res.data.token === '') {
            alert('登入失败')
          }
          else {
            sessionStorage.setItem('eleToken', res.data.token)
            localStorage.setItem('user', this.login_arg.username)
            window.location.reload()
          }

        }).catch(err => {
          console.log(err)
        }),
        this.$router.push({ path: this.$route.query.redirect, query: { showuser: true, showloginioc: false } })
    },
    index() {
      this.$router.push({ path: '/index', query: { redirect: '/home' } })
    }
  },
};
</script>

<style>
.login-overlay {
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

.login-window {
  background-color: white;
  height: 320px;
  width: 300px;
  border-radius: 10px;
  /* float: left; */
}

#user_la {
  position: relative;
  top: 34%;
  left: 5%;
}

#pwd_la {
  position: relative;
  top: 48%;
  right: 71%;
}

#user_in {
  position: relative;
  top: 35%;
  left: 10%;
  height: 30px;
  border-radius: 15px;
}

#pwd_in {
  position: relative;
  top: 36%;
  left: 23%;
  height: 30px;
  border-radius: 15px;
}

#login_id {
  position: relative;
  top: 58%;
  right: 45%;
  color: #fff;
  background-color: #4CAF50;
}

#out_login {
  position: relative;
  width: 30px;
  height: 30px;
  bottom: 29.3%;
  left: 90%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);

}

#out_login:hover {
  background-color: red;
}

#item_id {
  position: relative;
  left: 14%;
  bottom: 13%;
}

#index_id {
  position: relative;
  top: 36%;
  left: 15%;
  color: #fff;
  background-color: #4CAF50;
}
</style>

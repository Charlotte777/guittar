<template>
  <div class="login">
    <div class="login-container">
      <div class="login_img"><img src="/static/images/logo.png"></div>
      <div class="login_input">
        <guittar-input :todo="username"></guittar-input>
        <guittar-input :todo="password"></guittar-input>
        <guittar-switch></guittar-switch>
        <guittar-button :todo="login" style="text-align: center;"></guittar-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import guittarInput from './general/guittar-input'
  import guittarSwitch from './general/guittar-switch'
  import guittarButton from './general/guittar-button'
  export default {
    data() {
      let self = this;
      return {
        username: {
          type: 'text',
          placeholder: 'Username or Email',
          value: '',
          name: 'username'
        },
        password: {
          type: 'password',
          placeholder: 'Password',
          value: '',
          name: 'password'
        },
        login: {
          value: 'LOGIN',
          click() {
            let username = self.username.value;
            let password = self.password.value;
            Axios.get('/login/cellphone?phone=' + username + '&password=' + password).then(
              function(res) {
                let result = JSON.parse(res.request.responseText)
                if (result.code == 200) {
                  self.$store.state.userInfo = result.profile;
                  self.$router.push({
                    path: '/'
                  })
                } else {
                  alert('密码错误')
                }
              }
            )
          }
        }
      }
    },
    components: {
      guittarInput,
      guittarSwitch,
      guittarButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    background: url(/static/images/bg.png);
    height: 100%;
    background-position: center center;
    background-size: cover;
  }
  .login .login-container {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 100%;
  }
  .login .login-container .login_img {
    margin: 10px auto;
    margin-bottom: 15px;
  }
  .login .login-container .login_input {
    width: 270px;
    box-sizing: border-box;
    margin: 0px auto;
  }
</style>

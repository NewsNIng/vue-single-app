<template>
  <div>
    <mu-appbar title="注册">
      <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
    </mu-appbar>
    <div class="form">
  
      <mu-text-field label="手机号" labelFloat fullWidth hintText="请输入手机号" v-model="telphone" />
  
      <mu-text-field label="密码" labelFloat fullWidth hintText="请输入密码" type="password" v-model="password" />
      </br>
      </br>
      </br>
      <mu-raised-button label="注册" class="demo-raised-button" fullWidth primary @click='onClick' />
    </div>
    <mu-divider/>
    </br>
    <mu-flexbox class="footer">
      <mu-flexbox-item>
        <mu-flat-button label="已有帐号 ？ 点击登录" class="demo-flat-button" primary @click='gotoLogin' />
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telphone: '',
      password: ''
    }
  },
  methods: {
    onClick() {
      this.register()
    },
    onBackClick() {
      this.$router.back()
    },
    gotoLogin() {
      this.$router.next('login')
    },
    async register() {
      try {
        let rs = await this.$api.user.register(this.telphone, this.password)

        // 保存 信息
        // let { token } = rs.data
        // console.log(token)
        // this.updateToken(token)

        alert('注册成功')
        this.$router.back()
      } catch (e) {
        alert(e.errmsg)
      }

    }
  }
}

</script>

<style scoped>
.form {
  width: 88%;
  margin: 2rem auto;
}

.footer {

  text-align: center;
}
</style>

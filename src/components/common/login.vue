<template>
    <div>
        <mu-appbar title="登录">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>
        <div class="form">
    
            <mu-text-field label="手机号" labelFloat fullWidth hintText="请输入手机号" v-model="telphone" />
    
            <mu-text-field label="密码" labelFloat fullWidth hintText="请输入密码" type="password" v-model="password" />
            </br>
            </br>
            </br>
            <mu-raised-button label="登录" class="demo-raised-button" fullWidth primary @click='onClick' />
            <br/>
            <br/>
            <mu-raised-button label="获取测试帐号" class="demo-raised-button" fullWidth primary @click='onTestClick' />
        </div>
        <mu-divider/>
        </br>
        <mu-flexbox class="footer">
            <mu-flexbox-item>
                <mu-flat-button label="忘记密码" class="demo-flat-button" />
            </mu-flexbox-item>
            <mu-flexbox-item>
                <mu-flat-button label="注册" class="demo-flat-button" primary @click='goRegister' />
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data() {
        return {
            telphone: '',
            password: ''
        }
    },
    methods: {
        ...mapActions([
            'updateToken',
            'UserLogin'
        ]),
        onClick() {
            this.login()
        },
        onBackClick() {
            this.$router.back()
        },
        goRegister() {
            this.$router.next('register')
        },
        onTestClick(){
            this.telphone = '17019951022'
            this.password = 'newsning'
        },

        async login() {
            try {
                let rs = await this.$api.user.login(this.telphone, this.password)

                // 保存 信息
                let { token, userInfo } = rs.data
                console.log(rs.data)
                this.updateToken(token)
                this.UserLogin(userInfo)

                //如果用户手动输入"/"那么会跳转到这里来，即this.$route.query.redirect有参数
                let redirectUrl = decodeURIComponent(this.$route.query.redirect || '')
                console.log(redirectUrl)
                if (!redirectUrl) {
                    this.$router.back()
                } else {
                    this.$router.replace(redirectUrl)
                }

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

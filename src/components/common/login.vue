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
        </div>
        <mu-divider/>
        </br>
        <mu-flexbox class="footer">
            <mu-flexbox-item>
               <mu-flat-button label="忘记密码" class="demo-flat-button" />
            </mu-flexbox-item>
            <mu-flexbox-item>
                <mu-flat-button label="注册" class="demo-flat-button" primary/>
            </mu-flexbox-item>
        </mu-flexbox>
    </div>
</template>

<script>
export default {
    data(){
        return {
            telphone: '',
            password: ''
        }
    },
    methods: {
        onClick(){
            
        },
        onBackClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.form {
    width: 88%;
    margin: 2rem auto;
}
.footer{
    
     text-align: center;
}
</style>

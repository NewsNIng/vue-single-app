<template>
    <div>
        <mu-appbar title="个人资料">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
            <mu-flat-button color="white" label="保存" slot="right" @click='onSaveClick'/>
        </mu-appbar>
        <div class="form">
            <mu-text-field v-model='info.nickname' hintText="新的昵称" icon="color_lens"/><br/>


        </div>
        
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data(){
            return {
                info: {
                    nickname: ''
                }
            }
        },
        methods: {
            ...mapActions([
                'updateUserInfo'
            ]),
            onBackClick(){
                this.$router.back()
            },
            // 保存修改
            async onSaveClick(){
                await this.$api.user.update(this.info)
                this.updateUserInfo(this.info)
                this.info.nickname = ''
                this.$router.back()
            },
        }
    }
</script>

<style scoped>
    .form{
        padding-top: 20px;
    }
</style>
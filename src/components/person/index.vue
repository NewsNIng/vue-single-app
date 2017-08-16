<template>
  <div>
    <mu-card>
  
      <mu-card-media :title="userInfo.nickname" :subTitle="telPhone">
        <img :src="_getRandomImgSrc()" @click='onAvatarClick' style="maxHeight: 250px;filter: blur(4px);" />
      </mu-card-media>
  
    </mu-card>
    <br/>
    <mu-list>
      <mu-list-item title="修改资料" @click='onInfoClick'>
        <mu-icon slot="left" value="grade" />
      </mu-list-item>
      <mu-list-item title="换肤" @click='onThemeClick'>
        <mu-icon slot="left" value="remove_red_eye" />
      </mu-list-item>
      <mu-list-item title="Sent mail">
        <mu-icon slot="left" value="send" />
      </mu-list-item>
      <mu-list-item title="Drafts">
        <mu-icon slot="left" value="drafts" />
      </mu-list-item>
    </mu-list>
    <br/>
    <div class="logout">
      <mu-raised-button label="注销" fullWidth secondary @click='onLogout' />
    </div>
  
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

import theme from '@/assets/js/common/theme'

// 主题皮肤名称数组
const themes = [
  'light',
  'dark',
  'carbon',
  'teal'
]

export default {
  data() {
    return {
      // 用户信息
      // userInfo: {
      //   userName: 'NewsNing',
      //   telphone: 17098631995
      // },
      // 主题皮肤下标
      themeIndex: -1,
    }
  },
  mounted() {
    
  },
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo',
    }),

    // 隐藏真实手机号
    telPhone() {
      if(!this.userInfo.telphone){return ''}
      let tel = this.userInfo.telphone.toString().split('')
      tel.splice(3, 4, '*', '*', '*', '*')
      return tel.join('')
    },

  },
  methods: {
    ...mapActions([
      'UserLogout'
    ]),
    // 注销
    onLogout() {
      this.UserLogout()
      this.$router.replace('login')
    },
    // 换肤按钮
    onThemeClick() {
      this.themeIndex++
    },
    // 修改资料
    onInfoClick(){
      this.$router.next('my')
    },
    // 头像点击
    onAvatarClick(){
      alert(123)
    },
    _getRandomImgSrc() {
      return this.$itool.getRandomImgSrc()
    },
  },
  watch: {
    // 监听主题皮肤
    themeIndex(n, o) {
      if (n >= themes.length) {
        this.themeIndex = 0
      }

      theme.loadTheme(themes[this.themeIndex])
    }
  }


}

</script>

<style scoped>
.logout {
  width: 60%;
  margin: 0 auto;
}
</style>

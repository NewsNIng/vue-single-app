<template>
  <div>
    <mu-card>

      <mu-card-media :title="userInfo.userName" :subTitle="telPhone">
        <img src="https://cdn.pixabay.com/photo/2017/04/13/17/48/floor-2228277__340.jpg" />
      </mu-card-media>

    </mu-card>
    <br/>
    <mu-list>
      <mu-list-item title="换肤" @click='onThemeClick'>
        <mu-icon slot="left" value="remove_red_eye" />
      </mu-list-item>
      <mu-list-item title="Starred">
        <mu-icon slot="left" value="grade" />
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
        userInfo: {
          userName: 'NewsNing',
          telphone: 17098631995
        },
        // 主题皮肤下标
        themeIndex: -1,
      }
    },
    mounted() {

    },
    computed: {
      // 隐藏真实手机号
      telPhone() {
        let tel = this.userInfo.telphone.toString().split('')
        tel.splice(3, 4, '*', '*', '*', '*')
        return tel.join('')
      },
    },
    methods: {
      // 注销
      onLogout() {

      },
      // 换肤按钮
      onThemeClick() {
        this.themeIndex++
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

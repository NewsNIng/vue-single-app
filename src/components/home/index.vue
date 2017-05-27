<template>
  <div class="infinite-container" ref='room'>
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh" />
    <template v-for='o,i of num'>

      <mu-card>
        <mu-card-header title="NewsNing" subTitle="三天前">
          <mu-avatar src="https://sfault-avatar.b0.upaiyun.com/125/535/1255358193-5824870aaf3cb_huge256" slot="avatar" />
        </mu-card-header>
        <mu-card-text>
          <div @click='onTap(o, i)'>
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光， 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
          </div>
        </mu-card-text>
        <mu-card-actions>
          <mu-flat-button label="Action 1" />
          <mu-flat-button label="Action 2" />
        </mu-card-actions>
      </mu-card>
      <mu-divider/>

    </template>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText='' />
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        scrollTop: 0,
        num: 10,
        loading: false,
        scroller: null,
        refreshing: false,
        trigger: null
      }
    },
    mounted() {
      this.scroller = this.$el
      this.trigger = this.$el
      this.getEssayList()
      
      // console.log('Token: ' + this.userToken)
    },
    computed: {
      // ...mapGetters({
      //   userToken: 'getUserToken',
      // })
    },
    methods: {
      async getEssayList(){
        try {
          
        } catch (e) {
          
        }
      },

      

      onTap(o, i) {
        //this._saveScrollTop()
        this.$router.next('detail')
      },

      loadMore() {
        this.loading = true
        setTimeout(() => {
          this.num += 10
          this.loading = false
        }, 1000)
      },
      refresh() {
        this.refreshing = true
        setTimeout(() => {

          this.num += 10
          this.refreshing = false
        }, 500)
      },

      _saveScrollTop(){
        this.scrollTop = this.$refs.room.scrollTop
      },
      _resetScrollTop(){
        this.$refs.room.scrollTop = this.scrollTop
      } 
    },
    // 路由进入
    activated(){
      // 重置滚动条高度
      this._resetScrollTop()
    },
    // 路由离开
    deactivated(){
      // 记录当前滚动条高度
      this._saveScrollTop()
    }
  }

</script>

<style scoped>
  .infinite-container {
    width: 100%;
    height: calc(100% - 56px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    user-select: none;
  }

</style>

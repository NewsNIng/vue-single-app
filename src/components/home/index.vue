<template>
  <div class="infinite-container" ref='room'>
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh" />
    <template v-for='o,i of list'>
  

    <mu-list-item :title="o.user.nickname">
      <mu-avatar :src="o.user.avatar || _getRandomImgSrc()" slot="leftAvatar" />
     <span slot="describe">
        <span>{{_timeAgo(o.essay_time)}}</span>
      </span>
      <div style="color: rgba(0, 0, 0, .87); margin-top:5px;">{{o.essay_content}}</div>
      <!--<mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>-->
    </mu-list-item>

       <mu-divider inset/>
  
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
      loading: false,
      scroller: null,
      refreshing: false,
      trigger: null,
      page: {
        no: 0
      },
      list: []
    }
  },
  mounted() {
    this.scroller = this.$el
    this.trigger = this.$el

    this.loadMore()
  },
  computed: {
    // ...mapGetters({
    //   userToken: 'getUserToken',
    // })
  },
  methods: {
    async getEssayList(isDown = false) {
      let method = 'loading'
      if (isDown) {
        method = 'refreshing'
      }
      this[method] = true

      try {
        this[method] = false
        let { data } = await this.$api.essay.list(this.page.no),
          list = data.data
        console.log(data)
        if (list.length === 0) {
          this.page.no--
        } else {
          isDown && (this.list = [])
          this.list.push(...list)
        }


      } catch (e) {
        this[method] = false
        console.log(e)
      }
    },



    onTap(o, i) {
      this.$router.next('detail')
    },
    changeLoading(isShow = false) {
      this.loading = isShow
      this.refreshing = isShow
    },
    loadMore() {
      this.page.no++
      this.getEssayList()
    },
    refresh() {
      this.page.no = 1
      this.getEssayList(true)
    },

    _saveScrollTop() {
      this.scrollTop = this.$refs.room.scrollTop
    },
    _resetScrollTop() {
      this.$refs.room.scrollTop = this.scrollTop
    },
    _getRandomImgSrc(){
      return this.$itool.getRandomImgSrc()
    },
    _timeAgo(date){
      return new Date().ago(date)
    }
  },
  watch: {
    // 监控 页码 变化
    // 'page.no': function(){
    //   this.getEssayList()
    // }
  },
  // 路由进入
  activated() {
    // 重置滚动条高度
    this._resetScrollTop()
  },
  // 路由离开
  deactivated() {
    // 记录当前滚动条高度
    this._saveScrollTop()
  }
}

</script>

<style scoped>
.infinite-container {
  width: 100%;
  height: calc(100% - 56px);
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  user-select: none;
}
</style>

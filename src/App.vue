<template>
  <div id="app">
    <transition :name="transitionName">
       <keep-alive>
            <router-view class="child-view"></router-view>
        </keep-alive>
      
    </transition>
    <lg-preview></lg-preview>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'slide-left'
      }
    },


    watch: {
      '$route' (to, from, next) {
        let isBack = this.$router.isBack
        if(isBack === undefined){
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          // if(toDepth < fromDepth || (toDepth === fromDepth && to.path.length ) )
          this.transitionName = toDepth < fromDepth  ? 'slide-right' : 'slide-left'
        }else{
          this.transitionName = isBack  ? 'slide-right' : 'slide-left'
        }
        // this.$router.isBack = false
      }
    },
  }

</script>

<style scoped>
  .child-view {
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all .25s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

</style>

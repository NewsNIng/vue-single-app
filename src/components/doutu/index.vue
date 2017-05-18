<template>
  <div class="infinite-container">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh" />
      
      <waterfall :align="align" :line-gap="200" :min-line-gap="100" :max-line-gap="220" :single-max-width="300" :watch="items"
        @reflowed="reflowed" ref="waterfall">
        
        <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.index"
          move-class="item-move">

          <div class="item" :style="item.style" :index="item.index" v-preview="item.imgsrc">
          </div>

        </waterfall-slot>

      </waterfall>

    <!--<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText='' />-->
  </div>
</template>

<script>
  const imgs = ["http://www.bqxia.com//static/upload/emoji/1493173331185.jpg",
      "http://www.bqxia.com//static/upload/emoji/1493173307448.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492744411887.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492744179721.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492672556706.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492672539955.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492671180700.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492655307152.png",
      "http://www.bqxia.com//static/upload/emoji/1492655281127.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492653041355.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492570752984.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492569781800.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492569611000.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492567102925.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492478768411.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492414173858.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492413984921.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492163292132.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492154946016.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492154923029.jpg",
      "http://www.bqxia.com//static/upload/emoji/1492140023987.jpg",
      "http://www.bqxia.com//static/upload/emoji/1491890269920.jpg",
      "http://www.bqxia.com//static/upload/emoji/1491889657808.png",
      "http://www.bqxia.com//static/upload/emoji/1491817484162.jpg",
      "http://www.bqxia.com//static/upload/emoji/1491812444666.jpg",
      "http://www.bqxia.com//static/upload/emoji/1491809966207.jpg",
      "http://www.bqxia.com//static/upload/emoji/1491809034329.jpg",
      "http://www.bqxia.com//static/upload/emoji/1491548364383.jpg",
      "http://www.bqxia.com//static/upload/emoji/1491535365868.jpg",
      "http://www.bqxia.com//static/upload/emoji/1490858481389.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485069135602.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485069106611.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485069076744.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068951486.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068637217.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068593720.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068578382.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068562797.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068550986.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068526053.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068487319.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068451848.jpg",
      "http://www.bqxia.com//static/upload/emoji/1485068430376.png",
      "http://www.bqxia.com//static/upload/emoji/1485068380805.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484718515378.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484706620789.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484705298616.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484705265638.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484705057007.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484705032302.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484705018264.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484645164697.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484640246469.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484638366652.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484558238505.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484552650995.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484296469046.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484296448395.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484296419489.jpg",
      "http://www.bqxia.com//static/upload/emoji/1484214176565.jpg"
    ],
    imgsLen = imgs.length



  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

  var ItemFactory = (function () {

    var lastIndex = 0

    function generateRandomItems(count) {
      var items = [],
        i
      for (i = 0; i < count; i++) {
        // let imgsrc = 'static/img/'+ (parseInt(Math.random() * 8)+1)+'.jpg'
        let imgsrc = imgs[(parseInt(Math.random() * imgsLen))]
        items[i] = {
          index: lastIndex++,
          style: {
            // 'background-color': getRandomColor(),
            'background-image': `url('${imgsrc}')`
          },
          width: 100,
          height: 88 + ~~(Math.random() * 60),
          imgsrc
        }
      }
      return items
    }

    function getRandomColor() {
      var colors = [
        'rgba(21,174,103,.5)',
        'rgba(245,163,59,.5)',
        'rgba(255,230,135,.5)',
        'rgba(194,217,78,.5)',
        'rgba(195,123,177,.5)',
        'rgba(125,205,244,.5)'
      ]
      return colors[~~(Math.random() * colors.length)]
    }

    return {
      get: generateRandomItems
    }

  })()
  export default {
    data() {

      return {
        align: 'center',
        items: ItemFactory.get(300),
        isBusy: false,

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
    },
    methods: {
      loadMore() {
        this.loading = true
        setTimeout(() => {
          this.addItems()
          this.loading = false
        }, 1000)
      },
      refresh() {
        this.refreshing = true
        setTimeout(() => {
          this.shuffle()
          this.refreshing = false
        }, 500)
      },
      addItems: function () {
        if (!this.isBusy) {
          this.isBusy = true
          this.items.push.apply(this.items, ItemFactory.get(20))
        }
      },
      shuffle: function () {
        this.items.sort(function () {
          return Math.random() - 0.5
        })
      },
      reflowed: function () {
        this.isBusy = false
      }

    },
    components: {
      Waterfall,
      WaterfallSlot
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

  .item-move {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
    -webkit-transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .item {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    font-size: 1.2em;

    overflow: hidden;
    padding: 1rem;
    border-radius: 6px;


    box-shadow: 0 0 5px #999;


    background-repeat: no-repeat;
    background-size: 88%;
    background-position: center center;
  }

  .item>.imgroom {
    text-align: center;
    margin: 0 auto;
  }

  .item>.imgroom>img {
    max-width: 100%;
    min-width: 50%;
  }

  .item>.title {
    /*position: absolute;
    left: 10px;
    bottom: 10px;*/
  }

  .item:after {
    /*content: attr(index);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);*/
  }

  .wf-transition {
    transition: opacity .3s ease;
    -webkit-transition: opacity .3s ease;
  }

  .wf-enter {
    opacity: 0;
  }


</style>

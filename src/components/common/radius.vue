<template>
    <mu-float-button icon="ac_unit" class="radius" :class="touchState?'down':'up'" ref='radius' @touchmove.native="onTouch($event)" @touchend.native="onTouchEnd()" :style='{transform: "translate3d("+x+"px,"+y+"px,0)"}' @click='onClick' />
</template>

<script>
export default {
    data() {
        return {
            x: 0,
            y: 0,
            cw: 0,
            ch: 0,
            timer: null,
            touchState: false
        }
    },

    mounted() {
        this.init()
    },

    methods: {

        init() {
            // 获取屏幕宽高
            this.cw = document.body.scrollWidth
            this.ch = document.body.scrollHeight

            // 初始化位置在屏幕右下角
            this.x = this.cw * 0.8
            this.y = this.ch * 0.8
            this.onTouchEnd()
        },
        onClick() {
            this.$router.next('release')
        },
        onTouchEnd() {
            this.touchState = false
            // 自动贴边
            if (this.timer) {
                clearTimeout(this.timer)
                this.timer = null
            }
            this.timer = setTimeout(() => {
                if ((this.x + 24) * 2 >= this.cw) {
                    // right    
                    this.x = this.cw - 24
                } else {
                    // left
                    this.x = -24
                }
            }, 150)

        },
        onTouch(e) {
            this.touchState = true
            // 获取当前触摸手指位置
            let { clientX: x, clientY: y } = e.touches[0]

            // 纠正1
            x = x - 24
            y = y - 24

            // 纠正2
            if (x < 0) {
                x = 0
            } else if (x > this.cw - 48) {
                x = this.cw - 48
            }

            if (y < 48) {
                y = 48
            } else if (y > this.ch - 105) {
                y = this.ch - 105
            }

            // 赋值
            this.x = x
            this.y = y


        }
    }
}
</script>

<style scoped>
.radius {
    position: absolute;
    transform: translate3d(30px, 30px, 0);
    /*transition-timing-function: ease-out;*/
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
}
</style>
<style>
@keyframes rotateF {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.radius.up i.mu-icon {
    animation: rotateF 2s .1s  infinite;
}

</style>


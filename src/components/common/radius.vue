<template>
  <mu-float-button icon="add" class="radius" ref='radius' @touchmove.native="onTouch($event)" :style='{transform: "translate3d("+x+"px,"+y+"px,0)"}' @click='onClick' />
</template>

<script>
export default {
    data(){
        return {
            x: 0,
            y: 0,
            cw: 0,
            ch: 0
        }
    },
    
    mounted(){
        this.init()
    },

    methods: {

        init(){
            // 获取屏幕宽高
            this.cw = document.body.scrollWidth
            this.ch = document.body.scrollHeight
            
            // 初始化位置在屏幕右下角
            this.x = this.cw * 0.8
            this.y = this.ch * 0.8
        },
        onClick(){
            this.$router.next('release')
        },
        onTouch(e){
            // 获取当前触摸手指位置
            let {clientX: x, clientY: y} = e.touches[0]
            
            // 纠正1
            x = x - 28
            y = y - 28
            
            // 纠正2
            if(x < 0){
                x = 0
            }else if(x > this.cw - 56){
                x = this.cw - 56
            }

            if(y < 0){
                y = 0
            }else if(y > this.ch - 112){
                y = this.ch - 112
            }

            // 赋值
            this.x = x
            this.y = y
        }
    }
}
</script>

<style scoped>
    .radius{
        position: absolute;
        transform: translate3d(30px,30px,0);
        /*transition-timing-function: ease-out;*/
        left: 0;
        top: 0;
        width: 56px;
        height: 56px;
    }
</style>

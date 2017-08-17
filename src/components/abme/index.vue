<template>
    <div>
        <mu-appbar title="关于作者">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>
        <div class="infinite-container abmeRoom" ref='room'>
            <div>
                <pre v-html='code'></pre>
    
            </div>
            <div v-html="styleCode">
    
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {

            code: ``,
            finalCode: `
/* 
* 以下是我为您准备的一份我的个人说明哦~
*/

/* 首先给元素添加上过渡效果 */

.abmeRoom *{
    -webkit-transition: all .3s;
    transition: all .3s;
}

/* 为了保护您的眼睛，我修改一下背景颜色 */
.abmeRoom{
    color: rgb(222,222,222);
    background-color: rgb(66,66,66);
}


<div class="info">
 * 姓名   |  <span>宁鑫文</span> -  NewsNing
 * 生日   |  1995.10.22
 * 手机   |  170-9863-1995
 * 邮箱   |  nxw1995@qq.com
 * 所在地 |  广东 - 深圳
 * GitHub |  <img class=icon src=https://avatars2.githubusercontent.com/u/14814560?v=4&s=40 /> <a href=https://github.com/NewsNIng>NewsNIng</a>
 * Blog   |  <img class=icon src=https://static.segmentfault.com/v-598e31cb/global/img/touch-icon.png /> <a href=https://segmentfault.com/blog/newsning>SegmentFault专栏</a>
</div>


 - 两年多前端折腾经验
 - 参与创业项目经历一款社交App生命周期，前后端开发
 - 一款安全教育App，主要负责前端构建，若干web端
 - 擅长H5开发跨平台混合App，都为dcould 5+技术开发
 - 独爱JavaScript，学习能力强，喜欢自由
 - 熟练使用 es6，webpack，Vue全家桶
 - 对后端，数据库等也有一定的基础概念








            `,
            speed: 16, // 速度
        }
    },
    mounted() {
        this.start()
    },
    computed: {
        styleCode() {
            return `<style type="text/css">${this.code}</style>`
        }
    },
    methods: {
        onBackClick() {
            this.$router.back()
        },
        // 开始
        start() {

            (function _fn(n) {
                this.code = this.finalCode.substring(0, n)
                this.code.length < this.finalCode.length && setTimeout(_fn.bind(this, n + 1), this.speed)
                this.$refs.room.scrollTop = this.$refs.room.offsetHeight + 195
            }.bind(this)(0))

        }
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
    /* margin-top: 48px; */
}
</style>
<style>
.abmeRoom .info span {
    color: #ED6461;
}

.abmeRoom a {
    color: #2588f8;
    text-decoration: underline;
}

.abmeRoom .info .icon {
    border-radius: 50%;
    margin-bottom: -3px;
    width: 14px;
    height: 14px;
}
</style>





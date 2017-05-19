<template>
    <div>
        <mu-appbar title="说说详情">
            <mu-icon-button icon="arrow_back" slot="left" @click='onBackClick' />
        </mu-appbar>
    
        <mu-card>
            <mu-card-header title="NewsNing" subTitle="三天前">
                <mu-avatar src="https://sfault-avatar.b0.upaiyun.com/125/535/1255358193-5824870aaf3cb_huge256" slot="avatar" />
            </mu-card-header>
            <mu-card-text>
                <div>
                    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光， 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                </div>
            </mu-card-text>
        </mu-card>
    
        <mu-flat-button label="评论列表" disabled/>
        <mu-list>
            <mu-sub-header>今天</mu-sub-header>
            <mu-list-item title="这个周末一起吃饭么?">
                <mu-avatar src="http://git.oschina.net/uploads/86/518486_newsning.png?1468908092" slot="leftAvatar" />
                <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                </span>
                <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                    <mu-menu-item title="回复" />
                    <mu-menu-item title="标记" />
                    <mu-menu-item title="删除" />
                </mu-icon-menu>
            </mu-list-item>
            <mu-divider inset/>
            <mu-list-item title="Alex Qin">
                <mu-avatar src="http://git.oschina.net/uploads/86/518486_newsning.png?1468908092" slot="leftAvatar" />
                <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .87)">看电影啊</span>
                    <br/> 我们去看电影，最近有部烂片上映，又有吐槽的了
                </span>
                <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                    <mu-menu-item title="回复" />
                    <mu-menu-item title="标记" />
                    <mu-menu-item title="删除" />
                </mu-icon-menu>
            </mu-list-item>
            <mu-divider inset/>
            <mu-list-item title="LOL">
                <mu-avatar src="http://git.oschina.net/uploads/86/518486_newsning.png?1468908092" slot="leftAvatar" />
                <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span>
                    <br/> 周末一起 LOL
                </span>
                <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                    <mu-menu-item title="回复" />
                    <mu-menu-item title="标记" />
                    <mu-menu-item title="删除" />
                </mu-icon-menu>
            </mu-list-item>
            <mu-divider inset/>
            <mu-list-item title="Myron Liu">
                <mu-avatar src="http://git.oschina.net/uploads/86/518486_newsning.png?1468908092" slot="leftAvatar" />
                <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .87)">哇去</span>
                    <br/> 实在编不下去，这就是个demo
                </span>
                <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                    <mu-menu-item title="回复" />
                    <mu-menu-item title="标记" />
                    <mu-menu-item title="删除" />
                </mu-icon-menu>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },  
    methods: {
    
      onBackClick() {
        this.$router.back()
      }
    }
}
</script>

<style scoped>

</style>

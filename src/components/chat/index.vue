

<template>
    <div>
        <section class="title">
            <mu-appbar title="消息" class="title">
                <mu-icon value="send" slot="right">
                </mu-icon>
            </mu-appbar>
        </section>
        <div class="infinite-container" ref='room'>
    
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh" />
    
            <mu-list-item title="通知" describeText="您有一条新的消息">
                <mu-avatar icon="alarm_add" slot="leftAvatar" />
                <mu-icon value="chevron_right" slot="right" />
            </mu-list-item>
            <mu-divider inset/>
    
            <mu-list-item title="评论" describeText="NewsNing赞了您">
                <mu-avatar icon="chat_bubble_outline" slot="leftAvatar" />
                <mu-icon value="chevron_right" slot="right" />
            </mu-list-item>
            <mu-divider inset/>
            <template v-for="o,i of 10">
                <mu-list-item title="NewsNing" describeText="您真搞笑">
                    <mu-avatar src="https://sfault-avatar.b0.upaiyun.com/125/535/1255358193-5824870aaf3cb_huge256" slot="leftAvatar" />
                     <span slot="right">07 08</span> 
                    <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
                        <mu-menu-item title="置顶" />
                        <mu-menu-item title="待办" />
                        <mu-menu-item title="删除" />
                    </mu-icon-menu>
                </mu-list-item>
                <mu-divider inset/>
            </template>
    
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText='' />
        </div>
    </div>
</template>

<script>
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

    },
    methods: {
        changeLoading(isShow = false) {
            this.loading = isShow
            this.refreshing = isShow
        },
        loadMore() {
        },
        refresh() {
        },


    }
}
</script>

<style scoped>
.infinite-container {
    width: 100%;
    height: calc(100% - 112px);
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    user-select: none;
    margin-top: 56px;
}


.title {
    position: absolute;
    top: 0;
    width: 100%;
}
</style>
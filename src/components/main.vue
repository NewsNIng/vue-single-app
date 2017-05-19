<template>
    <div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    
        <mu-paper>
            <mu-bottom-nav :value="activeTab" @change="onChange" class="tabs">
                <mu-bottom-nav-item to="home" value="home" title="主页" icon="home" />
                <mu-bottom-nav-item to="doutu" value="doutu" title="斗图" icon="image" />
                <mu-bottom-nav-item to="person" value="person" title="我的" icon="person" />
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'home'
        }

    },
    methods: {
        onChange(index) {
            this.activeTab = index

            // this.$router.push({
            //     name: index
            // })


        }
    }
}
</script>

<style scoped>
.tabs {
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>



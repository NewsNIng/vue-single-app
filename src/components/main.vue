<template>
    <div>
        
        <router-view>
    
        </router-view>
    
    
        <mu-paper>
            <mu-bottom-nav :value="activeTab" @change="onChange" class="tabs">
                <mu-bottom-nav-item to="login" value="login" title="login" icon="restore" />
                <mu-bottom-nav-item to="register" value="register" title="register" icon="favorite" />
                <mu-bottom-nav-item value="person" title="我的" icon="person" />
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'person'
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



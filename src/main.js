// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



// 引用 Muse UI 
import MuseUI from 'muse-ui'
// 引用 Muse UI 样式文件
import 'muse-ui/dist/muse-ui.css'
// 安装至Vue
Vue.use(MuseUI)
// 使用 carbon 主题
//import 'muse-ui/dist/theme-carbon.css' 
// 加载默认主题
import theme from '@/assets/js/common/theme'
theme.loadTheme() 


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

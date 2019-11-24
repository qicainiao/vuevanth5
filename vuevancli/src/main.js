import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import zhCN from './locale/lang/zh-CN';
import enUS from './locale/lang/en-US';
import 'lib-flexible'
import 'style/common.less'


Vue.use(VueI18n) // 通过插件的形式挂载
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': zhCN,   // 中文语言包
    'en-US': enUS   // 英文语言包
  }
})


Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

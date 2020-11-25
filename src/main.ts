import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 自定义图标需要放在element后面引入,否则会被覆盖
import '@/assets/iconfont/style.css'
import dayjs from 'dayjs'
import { get, cloneDeep } from 'lodash'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production' // 开启vue-devtools调试工具
Vue.config.performance = process.env.NODE_ENV !== 'production'

Vue.prototype.$dayjs = dayjs
Vue.prototype.$get = get
Vue.prototype.$cloneDeep = cloneDeep

// 引入mockjs
process.env.NODE_ENV != 'production' && require('./mock/index')

Vue.filter('DateFormat', date => {
  if (!date) {
    return ''
  }
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
})
Vue.filter('DayFormat', date => {
  if (!date) {
    return ''
  }
  return dayjs(date).format('YYYY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

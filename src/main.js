// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/user-store'
//引入axios
import axios from 'axios'
//挂载Vue原型上axios
Vue.prototype.axios=axios
// store.dispatch('GET_USERLIST').then(()=>{
//   console.log(store.state.userlist)
// })

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

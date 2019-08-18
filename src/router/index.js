import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import login from '../views/login'
Vue.use(Router)
//异步加载组件
const loginIndex=()=>import('../views/loginIndex.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/login_index',
      name: 'loginIndex',
      component: loginIndex
    }
  ]
})

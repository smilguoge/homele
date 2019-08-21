import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import login from '../views/login'
Vue.use(Router)
//异步加载组件
const loginIndex=()=>import('../views/loginIndex.vue')
const userlist=()=>import('../components/userlist.vue')
const password=()=>import('../components/password.vue')
const adduser=()=>import('../components/adduser.vue')
const homeindex=()=>import('../components/login-home.vue')

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
      component: loginIndex,
      children:[
        {path: '',
        name: 'homeindex',
        component: homeindex},
        { path: '/userlist',
        name: 'userlist',
        component: userlist},
        { path: '/password',
        name: 'password',
        component: password},
        { path: '/adduser',
        name: 'adduser',
        component: adduser}
      ],
    }
  ]
})

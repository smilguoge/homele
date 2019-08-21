//引用vue
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'path';
import { reject } from 'q';
Vue.use(Vuex)
//创建state
const state={
  userinfo:JSON.parse(localStorage.getItem('userinfo')),
  // userlist:JSON.parse(localStorage.getItem('userlist'))
  userlist:[],
  age:JSON.parse(localStorage.getItem('age')),
}
const mutations={
  SAVE_USERINFO(state,userinfo){
    localStorage.setItem('userinfo',JSON.stringify(userinfo));
    localStorage.setItem('age',JSON.stringify(userinfo.idType));
    state.userinfo=userinfo;
    state.age=userinfo.idType;
  },
  GET_USERLIST(state,userlist){
    // localStorage.setItem('userlist',JSON.stringify(userlist));
    state.userlist=userlist;

  }
}
const actions={
  GET_USERLIST({commit}){
    return new Promise((resolve,reject)=>{
      axios.get('/api/userlist').then(response=>{
        commit('GET_USERLIST',response.data);
        resolve();
      })
    })
  }


}
console.log('store.state.userlist')

//创建仓库，暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions
})

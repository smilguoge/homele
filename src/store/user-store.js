//引用vue
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//创建state
const state={
  userinfo:JSON.parse(localStorage.getItem('userinfo'))
}
const mutations={
  SAVE_USERINFO(state,userinfo){
    localStorage.setItem('userinfo',JSON.stringify(userinfo));
    state.userinfo=userinfo;

  }
}


//创建仓库，暴露出去
export default new Vuex.Store({
  state,
  mutations
})

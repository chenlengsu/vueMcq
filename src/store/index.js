import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
// import * as actions from './actions'
// import * as mutations from './mutations'

Vue.use(Vuex)

let state = {
  name: "Klivitam",
  isMobile: ''
}
let getters = {
  getName(state) {
    return `我的名字是：${state.name}`
  }
}
let mutations = {
  changeName(state, name) {
    state.name = name
  },
  changeIsMobile(state, isMobile) {
    state.isMobile = isMobile
  }
}
let actions = {

}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

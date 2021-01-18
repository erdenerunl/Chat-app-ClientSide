import { createStore } from 'vuex'
import Friends from './modules/Friends.js'
import ChatList from './modules/ChatList.js'
import Chatbar from './modules/Chatbar.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Friends,
    ChatList,
    Chatbar
  }
})

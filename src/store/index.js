import { createStore } from 'vuex'
import Friends from './modules/Friends.js'
import ChatList from './modules/ChatList.js'
import Chatbar from './modules/Chatbar.js'
import ChatDetails from './modules/ChatDetails.js'
import Profile from './modules/Profile.js'

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
    Chatbar,
    ChatDetails,
    Profile
  }
})

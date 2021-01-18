import Axios from 'axios'

export default {
    namespaced: true,
    state:{
        chatList: []
    },
    mutations:{
        getChatList(state, newChatList){
            state.chatList = newChatList
        }
    },
    actions:{
        getChatList({commit}){
            Axios.get("http://localhost:3000/chatList").then(response =>{
                commit("getChatList", response?.data || [])
            }).catch(e => console.log(e))
        }
    },
    getters:{
        chatList: state => state.chatList
    }
}
import Axios from "axios"

export default {
    namespaced: true,
    state: {
        friends: []
    },
    mutations:{
        getFriends(state, friends ){
            state.friends = friends
        }
    },
    actions:{
        getFriends({commit}){
            Axios.get("http://localhost:3000/friends").then(response =>{
                commit("getFriends", response?.data || [])
            }).catch(e => console.log(e))
        }
    },
    getters:{
        friends: state => state.friends
    }
}
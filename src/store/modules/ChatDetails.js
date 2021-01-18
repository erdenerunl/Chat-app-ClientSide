export default {
    namespaced: true,
    state: {
        isEmpty: true
    },
    mutations:{
        showChat(state, e){
            state.isEmpty = false;
            console.log(e)
        }
    },
    getters:{
        isEmpty: state => state.isEmpty
    }
}
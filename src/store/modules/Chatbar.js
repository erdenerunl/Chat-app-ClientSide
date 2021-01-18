export default {
    namespaced: true,
    state:{
        selectedComponent: "ChatList",
        pageName: true
    },
    mutations:{
        newChat(state){
            state.selectedComponent = "Friends";
            state.pageName = false
        }
    },
    getters:{
        selectedComponent: state => state.selectedComponent,
        pageName: state => state.pageName
    }
}
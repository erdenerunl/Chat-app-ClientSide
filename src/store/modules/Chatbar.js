export default {
    namespaced: true,
    state:{
        selectedComponent: "ChatList",
        pageName: true
    },
    mutations:{
        newChat(state){
            state.selectedComponent = "Friends";
            state.pageName = false;
            console.log(state.selectedComponent, state.pageName, "newChat tuşuna basıldı" )
        },
        showChatList(state){
            state.selectedComponent = "ChatList";
            state.pageName = true;
            console.log(state.selectedComponent, state.pageName, "back to chats tuşuna basıldı" )
        }
    },
    getters:{
        selectedComponent: state => state.selectedComponent,
        pageName: state => state.pageName
    }
}
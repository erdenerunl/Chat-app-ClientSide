export default {
  namespaced: true,
  state: {
    isProfile: false,
  },
  mutations:{
      goProfile(state){
          state.isProfile = !state.isProfile
          console.log(state.isProfile)
      }
  },
  getters:{
      isProfile: state => state.isProfile
  }
};

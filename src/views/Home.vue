<template>
  <div>
    <div class="layout">
      <div class="container-fluid layout-wrapper p-0">
        <navbar  />
        <div class="row mr-0">
          <chatbar />
          <chat  />
          <profile v-if="isProfile" />
        </div>
      </div>
      <loading-bar v-if="isLoaded" />
    </div>
  </div>
</template>

<script>

import Profile from '@/components/Profile/Profile.vue'
import Navbar from '@/components/Navbar.vue'
import Chatbar from '@/components/Chatbar.vue'
import Chat from '@/components/ChatSide/Chat.vue'
import LoadingBar from '@/components/Reuseable/LoadingBar.vue'

import { mapGetters } from 'vuex'
export default {
  components : {
    Navbar,
    Chatbar,
    Chat,
    Profile,
    LoadingBar
  },
  computed:{
    ...mapGetters({
      isProfile: "Profile/isProfile",
      isLoaded: "isLoaded"
    })
  }
  
}
</script>

<style lang="scss" scoped>
.layout{
  height: 100vh;
}
.layout-wrapper{
  height: 100%;
}

</style>
<template>
  <div>
    <div class="layout">
      <div class="container-fluid layout-wrapper p-0">
        <navbar />
        <div class="row mr-0">
          <chatbar />
          <div v-if="isProfile" class="chat col-lg-4 col-md-6 col-sm-12 p-0">
            <chat />
          </div>
          <div v-else class="chat col-lg-8 col-md-9 col-sm-12 p-0">
            <chat />
          </div>
          <profile v-if="isProfile" />
        </div>
      </div>
      <loading-bar v-if="isLoaded" />
    </div>
  </div>
  <div class="alertbox">
    <notifications type="warning" >
      hata var
    </notifications>
  </div>
</template>

<script>

import Profile from '@/components/Profile/Profile.vue'
import Navbar from '@/components/Navbar.vue'
import Chatbar from '@/components/Chatbar.vue'
import Chat from '@/components/ChatSide/Chat.vue'
import LoadingBar from '@/components/Reuseable/LoadingBar.vue'

import { mapGetters } from 'vuex'
import Notifications from '../components/Reuseable/Notifications.vue'

export default {
  components : {
    Navbar,
    Chatbar,
    Chat,
    Profile,
    LoadingBar,
    Notifications
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
.layout {
  height: 100vh;
}
.layout-wrapper {
  height: 100%;
}
.chat {
  border-right: 1px solid #e6e6e6;
}
</style>
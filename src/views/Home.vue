<template>
  <div>
    <div class="layout">
      <div class="container-fluid layout-wrapper p-0">
        <navbar />
        <div class="row">
          <chatbar />
          <chat />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Chatbar from '@/components/Chatbar.vue'
import Chat from '@/components/Chat.vue'
export default {
  components : {
    Navbar,
    Chatbar,
    Chat
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
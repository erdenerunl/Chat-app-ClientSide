<template>
  <div>
    <div class="layout">
      <div class="container-fluid layout-wrapper p-0">
        <sidebar />
        <div class="row">
          <chatbar />
          <chat />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Chatbar from '@/components/Chatbar.vue'
import Chat from '@/components/Chat.vue'
export default {
  components : {
    Sidebar,
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
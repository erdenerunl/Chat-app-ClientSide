<template>
  <div>
    <div class="layout">
      <div class="container-fluid layout-wrapper p-0">
        <div class="row">
          <sidebar />
          <chatbar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Chatbar from '@/components/Chatbar.vue'
export default {
  components : {
    Sidebar,
    Chatbar
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
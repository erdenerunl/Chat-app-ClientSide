<template>
  <div>
    <div class="layout">
      <div class="container-fluid layout-wrapper p-0">
        <sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components : {
    Sidebar
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
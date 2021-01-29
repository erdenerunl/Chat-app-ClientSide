<template>
  <div
    class="loading-container d-flex justify-content-center align-items-center"
  >
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.spinner-border {
  color: #00d4ff;
}
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ccccccc9;
}
</style>
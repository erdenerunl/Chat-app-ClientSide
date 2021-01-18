<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="i in 10" :key="i">
      <figure class="user-avatar">
        <div class="fake-img"></div>
      </figure>
      <div class="user-list-body d-flex w-100 justify-content-between">
        <div class="user-list-text">
          <h5>Onur Kayabaşı</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="user-list-info pl-3">
          <small>5.20PM</small>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chatbar-body {
  flex: 1 1;
  overflow: auto;


  .list-group-item {
    padding: 1rem 2rem;
    display: flex;
    cursor: pointer;

    .user-list-body {
      .user-list-text {
        display: flex;
        flex-direction: column;

        p,h5 {
          width: 100%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
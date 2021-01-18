<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="chat in chatList" :key="chat.id">
      <figure class="user-avatar">
        <div class="fake-img"></div>
      </figure>
      <div class="user-list-body d-flex w-100 justify-content-between">
        <div class="user-list-text">
          <h5>{{ chat.from }}</h5>
          <p> {{ chat.message }} </p>
        </div>
        <div class="user-list-info pl-3">
          <small> {{ chat.msg_date }} </small>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  
  created(){
    this.$store.dispatch("ChatList/getChatList")
  },
  computed:{
    ...mapGetters({
      chatList: "ChatList/chatList"
    })
  }
};
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
<template>
  <div>
    <div class="alert" :class="variations" :type="type" role="alert">
      <slot>
          {{message}}
      </slot>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        type: {
            type: String,
            default: "danger",
        },
        message:{
            type: String,
            default: "There is an error here!"
        }
    },
    computed:{
        variations(){
            return "alert-" + this.type
        }
    }
};
</script>
<style lang="scss">
</style>
<template>
  <div id="dialog-block" :class="aside">
    <div class="left-avatar avatar-block" v-if="left">
      <img :src="avatarUrl" />
    </div>
    <div class="center-content">
      <p>{{ data.text }}</p>
    </div>
    <div class="right-avatar avatar-block" v-if="!left">
      <img :src="avatarUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',

  props: ['data', 'avatarUrl'],

  data () {
    return {
      msg: 'Welcome to dialog',
      aside: 'onLeft',
      left: true
    }
  }
}
</script>

<style scoped>
  @import url('../../assets/sass/dialog.css');
</style>

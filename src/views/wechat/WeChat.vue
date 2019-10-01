<template>
  <div id="wechat">
    <ul class="message-cells_ul weui-cells">
      <msg-cell v-for="(item, index) of $store.state.messages" :item="item" :key="index"></msg-cell>
    </ul>
  </div>
</template>

<script>
import MsgCell from './MsgCell.vue'

export default {
  name: 'Wechat',

  components: {
    'msg-cell': MsgCell
  },

  beforeRouteLeave (to, from, next) {
    let name = to.params.friend
    this.$store.commit('setPageName', name)
    next()
  }
}
</script>

<style>
  @import url('../../assets/sass/wechat.scss');
</style>

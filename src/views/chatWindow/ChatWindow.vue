<template>
  <div id="chatWindow">
    <section class="chat-section clearFix">
      <wx-dialog  v-for="item of data.msgList" :key="Number(item.date)" :data="item" :avatarUrl="data.senderAvatar"></wx-dialog>
    </section>
    <footer class="input-area">
      <div class="left-btn voiceBtn keyboardBtn">
        <i class="iconfont">&#xe606;</i>
      </div>
      <div class="chat-input">
        <input type="text" v-model="tempMessage" />
      </div>
      <div class="right-btns faceBtn sendBtn">
        <i class="iconfont">&#xe6df;</i>
        <i class="iconfont" @click.prevent="sendMsg">&#xe652;</i>
      </div>
    </footer>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'

export default {
  name: 'ChatWindow',
  components: {
    'wx-dialog': Dialog
  },

  data () {
    return {
      msg: 'Welcome to chatwindow',
      tempPageName: '',
      data: {},
      tempMessage: ''
    }
  },

  beforeRouteEnter (to, from, next) {
    // 通过 `vm` 访问组件实例
    next(vm => {
      vm.tempPageName = to.params.friend
      let id = Number(to.query.senderId)
      vm.getCurrentDialog(vm, id)
      vm.$store.commit('setPageName', to.params.friend)
    })
  },

  methods: {
    getCurrentDialog: (ctx, id) => {
      let data = ctx.$store.state.messages
      data.forEach(item => {
        if (item.senderId === id) {
          ctx.data = item
        }
      })
    },

    sendMsg () {
      console.log(this.tempMessage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../assets/sass/chatWindow.scss');
</style>

<template>
    <router-link
      :to="{
        path: `wechat/chatingWith/${item.sendBy}`,
        query: {
          senderId: item.senderId
        }
      }"
      tag="li"
      id="msg-cell"
      class="weui-cell weui-cell_example"
    >
      <div class="weui-cell__hd m-avatar">
        <img :src="item.senderAvatar">
        <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>
      </div>
      <div class="weui-cell__bd m-text">
        <p class="sender">{{ item.sendBy }}</p>
        <p>{{ item.msgList[item.msgList.length - 1].text }}</p>
      </div>
      <div class="weui-cell__ft m-date">
        <p class="msg-date">{{ item.msgList[item.msgList.length - 1].date | moment('time') }}</p>
        <p class="ignore-icon"></p>
      </div>
    </router-link>
</template>

<script>
export default {
  name: 'MsgCell',

  props: ['item']
}
</script>

<style scoped>
  @import url('../../assets/sass/wechat.scss');
</style>

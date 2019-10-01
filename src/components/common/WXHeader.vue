<template>
  <div id="wx-header">
    <!-- 左侧 标题 以及 返回按钮 -->
    <div class="hd-left">
      <i class="iconfont" v-show="$route.path.split('/').length > 2" @click="goBack">&#xe671;</i>
      <span>{{ title }}</span>
    </div>
    <div class="hd-right">
      <i class="iconfont">&#xe619;</i>
      <i class="iconfont">&#xe67b;</i>
      <i class="iconfont" v-show="$store.state.showMore">&#xe60f;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WXHeader',

  props: ['title'],

  methods: {
    goBack: () => {
      history.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

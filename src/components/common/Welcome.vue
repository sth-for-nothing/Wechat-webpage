<template>
  <div class="welcome" :style="{ display: hide ? 'none' : '' }">
    <img src="https://sinacloud.net/vue-wechat/images/welcome.jpg" alt="欢迎界面" />
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      hide: false
    }
  },

  mounted () {
    this.timer = setTimeout(() => {
      this.hide = true
    }, 1000)
  },

  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 9999;
}

.welcome img {
  width: auto;
  height: 100%;
}
</style>

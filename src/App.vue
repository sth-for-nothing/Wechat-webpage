<template>
  <div id="app">
    <!-- 启动页 地球 -->
    <wx-welcome></wx-welcome>
    <!-- 头部 -->
    <header>
      <wx-header :title="this.$store.state.pageName"></wx-header>
    </header>
    <!-- 主页 内容 router-view -->
    <div class="main-container" :class="$route.path.split('/').length > 2 ? 'hideLeft' : 'showBack'">
      <!-- 中间内容显示 -->
      <section>
        <keep-alive>
          <router-view name="default" />
        </keep-alive>
      </section>
      <!-- 底部导航 -->
      <footer id="nav-footer" :style="{ 'height': navHeight }">
        <wx-nav></wx-nav>
      </footer>
    </div>

    <!-- 子页面 router-view -->
    <transition
      name="subPage_transition"
      :enter-active-class="enterAnimate"
      :leave-active-class="leaveAnimate"
    >
      <router-view name="subPage" class="sub-page"></router-view>
    </transition>
  </div>
</template>

<script>
import Welcome from '@/components/common/Welcome.vue'
import WXHeader from '@/components/common/WXHeader.vue'
import WXNav from '@/components/common/WXNav.vue'

export default {
  name: 'App',

  components: {
    'wx-welcome': Welcome,
    'wx-header': WXHeader,
    'wx-nav': WXNav
  },

  data () {
    return {
      navHeight: 0,
      enterAnimate: null,
      leaveAnimate: null
    }
  },

  watch: {
    // 监听 $route 路由改变时获取 path 以设置 pageName 和 过渡效果
    $route (to, from) {
      // 四个主页设置了 meta
      if (to.meta.pageName) {
        this.$store.commit('setPageName', to.meta.pageName)
      }

      // transition
      let toDepth = to.path.split('/').length
      let fromDepth = from.path.split('/').length
      // 同级路由不做效果
      if (toDepth === fromDepth) return

      this.enterAnimate = toDepth > fromDepth ? 'animated slideInRight fast' : 'animated slideOutRight fast'

      this.leaveAnimate = toDepth > fromDepth ? 'animated slideOutRight fast' : 'animated slideOutRight fast'
    }
  },

  mounted () {
    const navHeight = document.getElementById('wx-nav').clientHeight + 'px'
    this.navHeight = navHeight || null
  }
}
</script>

<style>
  /*将公用的样式统一在此导入*/
  @import "assets/css/base.css";
  @import "assets/css/common.css";

  @import "assets/css/app.css";
  @import "assets/sass/wx-header.scss";

  /*阿里 fonticon*/
  @import "assets/css/lib/iconfont.css";

  /*weui 样式库 */
  @import "assets/css/lib/weui.min.css";
</style>

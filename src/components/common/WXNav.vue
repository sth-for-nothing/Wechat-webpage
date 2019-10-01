<template>
    <nav id="wx-nav" class="weui-tabbar">
      <router-link replace to="/" tag="dl" class="weui-tabbar__item">
        <span style="display: inline-block; position: relative;">
          <span class="weui-tabbar__icon">
            <i class="iconfont">&#xe600;</i>
          </span>
          <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
        </span>
        <p class="weui-tabbar__label">微信</p>
      </router-link>
      <router-link replace to="/contact" tag="dl" class="weui-tabbar__item">
        <span style="display: inline-block; position: relative;">
          <span class="weui-tabbar__icon">
            <i class="iconfont">&#xe631;</i>
          </span>
          <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
        </span>
        <p class="weui-tabbar__label">通讯录</p>
      </router-link>
      <router-link replace to="/find" tag="dl" class="weui-tabbar__item">
        <span style="display: inline-block; position: relative;">
          <span class="weui-tabbar__icon">
            <i class="iconfont">&#xe604;</i>
          </span>
          <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
        </span>
        <p class="weui-tabbar__label">发现</p>
      </router-link>
      <router-link replace to="/mine" tag="dl" class="weui-tabbar__item">
        <span style="display: inline-block; position: relative;">
          <span class="weui-tabbar__icon">
            <i class="iconfont">&#xe61d;</i>
          </span>
          <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
        </span>
        <p class="weui-tabbar__label">我的</p>
      </router-link>
    </nav>
</template>

<script>
export default {
  name: 'WXNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../../assets/sass/wx-nav.scss');
</style>

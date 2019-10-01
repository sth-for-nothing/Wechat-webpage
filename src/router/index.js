import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 使用 require 的形式，而非 import
// 不是一次性加载所有组件，而是 按需加载

export default new Router({
  base: '/wechat/',
  linkExactActiveClass: 'weui-bar__item_on',
  routes: [
    {
      path: '/',
      name: 'wechat',
      meta: {
        pageName: '微信'
      },
      component: resolve => require(['../views/wechat/WeChat.vue'], resolve)
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        pageName: '联系人'
      },
      component: resolve => require(['../views/contact/Contact.vue'], resolve)
    },
    {
      path: '/find',
      name: 'find',
      meta: {
        pageName: '发现'
      },
      component: resolve => require(['../views/find/Find.vue'], resolve)
    },
    {
      path: '/mine',
      name: 'mine',
      meta: {
        pageName: '我的'
      },
      component: resolve => require(['../views/mine/Mine.vue'], resolve)
    },

    {
      path: '/wechat/chatingWith/:friend',
      name: 'chating',
      components: {
        'default': resolve => require(['../views/wechat/WeChat.vue'], resolve),
        'subPage': resolve => require(['../views/chatWindow/ChatWindow.vue'], resolve)
      }
    }
  ]
})

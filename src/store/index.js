import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  pageName: '',
  // 更多按钮
  showMore: false,
  // 消息队列
  messages: [
    {
      sendBy: 'coke',
      senderId: 10001,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 false 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。',
          'date': 148811127964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488112317964495
        }
      ]
    },
    {
      sendBy: 'tony老师',
      senderId: 100002,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/yehua.jpg',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '来理发',
          'date': 14881179695
        },
        {
          'text': '快',
          'date': 18117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 100003,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 100004,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 100043,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 104003,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 100023,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 100073,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 1070003,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 10040003,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 1000040403,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 10000123,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    },
    {
      sendBy: 'JJ',
      senderId: 100012403,
      senderAvatar: 'https://sinacloud.net/vue-wechat/images/headers/header01.png',
      // 状态 未读
      read: false,
      // 未读数
      unreadNum: 2,
      msgList: [
        {
          'text': '冷兔 微信逼死强迫症头像',
          'date': 1488117964495
        },
        {
          'text': '点击空白处，操作菜单消失',
          'date': 1488117964495
        }
      ]
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

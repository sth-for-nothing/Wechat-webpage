# vue2.0-wechat-socket

> vue2.0-微信界面-聊天系统

## Vue-Rouer -> require

> 使用 import 引入时，路由里所有 component 都会打包在一个 js 中，初始化时加载时间过长
> 使用 require 不是开始就加载，而是在调用时加载，或者说 按需加载，只有访问这个路由才会加载 component

```js
routes: [
    {
        path: '/',
        name: '微信',
        component: resolve => require(['../components/wechat/wechat.vue'], resolve)
    }
]
```

## vue + sass
```bash
cnpm install node-sass sass-loader --save

{
  // 添加 sass 识别
  test: /\.scss$/,
  loaders: ["style", "css", "sass"]
}
```

## lib-flexible.js
```bash
npm install lib-flexible --save
```
`import 'lib-flexible'`

## px2rem 和 weui 冲突

```js
// .postcssrc.js
    'postcss-pxtorem': {
      rootValue: 375 / 20,
      propList: ['*', '!border*'], // !border* 表示不配备边框
      remPrecision: 5
    }
```

## moment 格式化时间戳
- import './plugins/comment.js'
- {{ date | comment('hh : ss') }}


## You may have an infinite update loop in a component render function.
在 v-for 循环中，方法或者计算属性对vm.$data的属性进行操作 可能修改到循环对象导致死循环

## beforeRouteEnter
```js
  beforeRouteEnter (to, from, next) {
    // 通过 `vm` 访问组件实例
    next(vm => {
      vm.tempPageName = to.params.friend
      vm.$store.commit('setPageName', to.params.friend)
    })
```

## 命名视图 router-view[name=""]
> 当一个路由 展示多个组件 比如：aside + section，通过 name 区分
```js
routes: [
  {
    path: '/',
    components: {
      default: Foo,
      a: Bar,
      b: Baz
    }
  }
]
```

## 布局
四个 nav 是主页面
```
-- #app
  -- header(45px)
    -- mainPage( router-view[name = "default"] ) [height: calc(100% - 45px)]
        -- content
        -- footer(nav)
  --subpage(top: 45px; absolute; 100%) [transition -> moveLeft]
```

## animate.css

## 聊天 对话框 带箭头 
```css
.center-content::before {
    content: "";
    width: 0;
    height: 0;
    margin-left: -6px;
    position: absolute;
    left: 0;
    border-width: 6px 6px 6px 0;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
    border-radius: 10px;
}
```
> border 画三角形 =》宽高为0 =》border的宽度 为三角形边长 =》另外三边设为透明

## methods 不使用箭头函数
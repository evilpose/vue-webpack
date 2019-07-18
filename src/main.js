//入口文件
import Vue from 'vue'

//1.1  导入路由的包
import VueRouter from 'vue-router'
//1.2  启用vuerouter
Vue.use(VueRouter)

//导入app根组件
import app from './App.vue'

//按需导入mint-ui中的组件
import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//1.3 导入自己的router.js路由模块
import router from './router.js'

//导入 MUI 的样式
import './lib/MUI/css/mui.min.css'
//导入　MUI　的扩展图标
import './lib/MUI/css/icons-extra.css'

//2.1 导入 vue-resource
import VueResource from 'vue-resource'
//2.2 安装 vue-resource 
Vue.use(VueResource)


var vm = new Vue({
    el:'#app',
    data:{},
    methods: {},
    render:c=>c(app),
    router  //1.4 挂载路由对象到vm实例上
})
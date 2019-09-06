import Vue from 'vue'
import App from './App'
import store from './pages/store/store'
import Fly from 'flyio/dist/npm/wx'
//设置vue的提示功能关闭
Vue.config.productionTip = false

//声明当前组件的类型
App.mpType = 'app'  //应用

//将store对象放置在vue的原型上,为了每个对象都可以使用
Vue.prototype.$store=store;


let fly=new Fly()
Vue.prototype.$fly=fly

//生成应用的实例
const app = new Vue(App)

//挂载整个应用
app.$mount()

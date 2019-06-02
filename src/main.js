import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';   //导入axios
Vue.prototype.$http=axios;  //绑定到原型



Vue.use(VueRouter);

import './assets/css/base.css';//全局引入
import './assets/js/font';

import routes from './routes.config.js';//引入路由

//路由实例
const router=new VueRouter({
  routes:routes,
  mode:'history'// 默认是hash 默认  修改history
});

import filters from './filters/index.js'; //引入过滤器
// filters.fillzero
// filters.date;
// filters.xxx

//配置全局过滤器
// Vue.filter('date',fn)

/*Object.keys(filters).forEach(function(key){
  Vue.filter(key,filters[key])
});*/

/*Object.keys(filters).forEach((key)=>{
 Vue.filter(key,filters[key])
 });*/
//配置到全局根Vue实例下
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));


//引入状态管理
import store from './store/index.js';

//引入全局loading组件
import loading from './components/loading';
Vue.use(loading);


//配置axios,读取数据时候和返回数据时，可以自定义一段代码(loading显示隐藏)
axios.interceptors.request.use(function(config){
  //显示loading
  store.dispatch('showLoading');
  return config;
},function(error){
  return Promise.reject(error);
});
axios.interceptors.response.use(function(response){
  //隐藏loading
  store.dispatch('hideLoading');
  return response;
},function(error){
  return Promise.reject(error);
});

//导入 animate.css
import 'animate.css';

new Vue({
  el: '#app',
  name:'rootComponent',
  render: h => h(App),
  router,
  store
});

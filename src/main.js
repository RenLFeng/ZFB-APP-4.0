import Vue from 'vue';
import App from './App';
import { router } from './router';
import Api from './libs/Api'; 
import {get,post,postWithJson} from './libs/server'; 
import { Lazyload } from 'vant';
import vueTouch from './libs/vue-touch';
import Calendar from 'vue-mobile-calendar'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
<<<<<<< HEAD
import store from "./store";
// import Jsrsasign from 'jsrsasign'
// console.log(Jsrsasign);
// Vue.prototype.$jsrsasign = Jsrsasign
=======
>>>>>>> 0786b4f14e4e27676c2f2a28b50507eaa24e9dba
// import echarts from "echarts";
// Vue.prototype.$echarts = echarts;
Vue.prototype.api = Api; 
Vue.prototype.get = get; 
Vue.prototype.post = post; 
Vue.prototype.postWithJson = postWithJson; 
Vue.use(Lazyload);
Vue.use(vueTouch);
Vue.use(Calendar);
Vue.use(Mint);
import 'amfe-flexible';
new Vue({
  router,
<<<<<<< HEAD
    store,
=======
>>>>>>> 0786b4f14e4e27676c2f2a28b50507eaa24e9dba
  el: '#app',
  render: h => h(App)
});

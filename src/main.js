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
import store from "./store";
import {Toast} from 'vant';
import '../public/public.less'
// import Jsrsasign from 'jsrsasign'
// console.log(Jsrsasign);
// Vue.prototype.$jsrsasign = Jsrsasign
// import echarts from "echarts";
// Vue.prototype.$echarts = echarts;
Vue.prototype.Toast=Toast;
Vue.prototype.api = Api; 
Vue.prototype.get = get; 
Vue.prototype.post = post; 
Vue.prototype.postWithJson = postWithJson; 
Vue.use(Lazyload);
Vue.use(vueTouch);
Vue.use(Calendar);
Vue.use(Mint);
import 'amfe-flexible';
import { from } from '_array-flatten@2.1.2@array-flatten';
new Vue({
  router,
    store,
  el: '#app',
  render: h => h(App)
});

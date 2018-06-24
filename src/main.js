// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import fastClick from 'fastclick';
// 这一块可以看 webpack.base.conf.js 的 resolve
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'swiper/dist/css/swiper.css';
import store from './store';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/storeIndex.js'

require('../node_modules/vux/src/styles/reset.less');
require('weui');

const FastClick = require('fastclick')
FastClick.attach(document.body)

import { AlertPlugin, ToastPlugin, WechatPlugin, LoadingPlugin} from 'vux';

Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(WechatPlugin);
Vue.use(LoadingPlugin);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

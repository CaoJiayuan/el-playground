// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App';
import {router} from './router';
import {Storage} from './assets/js/utils'
import store from './store'
require('./mock');

require('./assets/js/request');


Vue.config.productionTip = false;
Vue.use(Storage)
/* eslint-disable no-new */

const vueApp = new Vue({
  el        : '#app',
  router,
  components: {App},
  template  : '<App/>',
  store
});

window.vueApp = vueApp;

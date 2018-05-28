// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App';
import router from './router';

require('./assets/js/request');


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el        : '#app',
  router,
  components: {App},
  template  : '<App/>'
});

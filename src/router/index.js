import interceptor from '../assets/js/routerInterceptor';
import Dashboard from '../pages/dashboard/Index';
import Accounts from '../pages/accounts/Index';
import Index from '../pages/Index';
import Login from '../pages/auth/login';

const routes = [
  {
    path     : '/',
    name     : 'Dashboard',
    component : Index,
    children : [
      {
        path: '/',
        component: Dashboard,
        meta     : {
          title: '首页'
        }
      },
      {
        path: '/accounts',
        component: Accounts,
        meta     : {
          title: '用户'
        }
      },
    ]
  },
  {
    path     : '/login',
    name     : 'login',
    meta     : {
      title: '登陆',
      guest: true
    },
    component : Login
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes
});


router.beforeEach(interceptor);


export {
  router,
  routes
};

import interceptor from '../assets/js/routerInterceptor';
import Dashboard from '../pages/dashboard/Index';
import Accounts from '../pages/accounts/Index';
import Index from '../pages/Index';
import Login from '../pages/auth/login';
import Test from '../pages/Test';


const router = new VueRouter({
  routes: [
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
    }
  ]
});


router.beforeEach(interceptor);


export default router;

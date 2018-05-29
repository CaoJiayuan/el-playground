import interceptor from '../assets/js/routerInterceptor';
import Dashboard from '../pages/dashboard/Index';
import Index from '../pages/Index';
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
            title: 'dashboard'
          }
        }
      ]
    },
    {
      path     : '/test',
      name     : 'test',
      component : Test
    }
  ]
});


router.beforeEach(interceptor);


export default router;

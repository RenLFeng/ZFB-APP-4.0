import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    meta: {
      title: '登录'
    },
    path: '/',
    component: () => import('./views/login.vue')
    // redirect: '/'
  },
  {
    meta: {
      title: '首页'
    },
    path: '/index',
    name:'index',
    component: () => import('./views/index.vue')
  },
  {
    meta: {
      title: '404'
    },
    path: '/*',
    component: () => import('./views/404/index.vue')
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};

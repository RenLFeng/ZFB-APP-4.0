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
      title: 'home'
    },
    path: '/home',
    name:'home',
    component: () => import('./views/Home.vue')
  },
  {
    meta: {
      title: 'CryptoJS'
    },
    path: '/CryptoJS',
    component: () => import('./views/CryptoJS.vue')
    // redirect: '/'
  },
  {
    meta: {
      title: '重置密码'
    },
    path: '/ForgetPwd',
    component: () => import('./views/password/ForgetPwd.vue')
  },
  {
    meta: {
      title: '扫一扫'
    },
    path: '/scan',
    component: () => import('./views/scan.vue')
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

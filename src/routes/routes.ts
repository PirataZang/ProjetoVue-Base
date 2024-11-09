import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Login from '../components/Login.vue';
import Site from '../components/Site.vue';
import WorkList from '../components/works/WorkList.vue';

const routes = [
  {
    path: '',
    name: 'Site',
    component: Site,
    meta: { app: false },
    icon: 'fa fa-bars',
  },
  {
    path: '/home-page',
    name: 'HomePage',
    component: HomePage,
    meta: { requiresAuth: true },
    icon: 'fa fa-bars',
  },
  {
    path: '/adm',
    name: 'Login',
    component: Login,
    meta: { app: false },
    icon: 'fa fa-bars',
  },
  {
    path: '/workList',
    name: 'WorkList',
    component: WorkList,
    meta: { requiresAuth: true },
    icon: 'fa fa-bars',
  },
  {
    path: '/workForm',
    name: 'WorkForm',
    component: WorkList,
    meta: { requiresAuth: true },
    icon: 'fa fa-bars',
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guard de navegação
router.beforeEach((to, _, next) => {
  let token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next({ path: '/adm' });
  }
  else {
    next();
  }
});

export default router;

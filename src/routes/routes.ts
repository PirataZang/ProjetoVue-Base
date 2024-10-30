import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Login from '../components/Login.vue';
import Cardapio from '../components/cardapio/cardapio.vue';

const routes = [
  {
    path: '/adm',
    name: 'Login',
    component: Login
  },
  {
    path: '/home-page',
    name: 'HomePage',
    component: HomePage,
    meta: { requiresAuth: true } 
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: Cardapio,
    meta: { requiresAuth: true } 
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Guard de navegação
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  const hasToken = token?.includes('ktdAtt4c6');
  if (to.meta.requiresAuth && !hasToken) {
    next({ path: '/adm' });
  } else {
    next();
  }
});

export default router;

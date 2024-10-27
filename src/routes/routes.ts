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
    component: HomePage
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: Cardapio
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // para usar URLs amigáveis
  routes
});

export default router;

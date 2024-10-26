import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/adm',
    name: 'Login',
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // para usar URLs amigáveis
  routes
});

export default router;

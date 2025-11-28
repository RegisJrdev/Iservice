import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/pages/register/RegisterView.vue'

import HomeView from '@/pages/HomeUserView.vue'
import UsersServicosView from '@/pages/users/UsersServicosView.vue'
import UsersView from '@/pages/users/UsersView.vue'

import PrestadoresView from '@/pages/prestadores/PrestadoresView.vue'
import PrestadoresHomeView from '@/pages/prestadores/PrestadoresHomeView.vue'
import PrestadoresServicosView from '@/pages/prestadores/PrestadoresServicosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/register' },
    { path: '/register', component: RegisterView },
    {
      path: '/users',
      children: [
        { path: '', name: 'users.home', component: HomeView },
        { path: 'view', name: 'users.view', component: UsersView },
        { path: 'servicos', name: 'users.servicos', component: UsersServicosView },
      ]
    },
    {
      path: '/prestadores', 
      children: [
        { path: '', name: 'prestadores.home', component: PrestadoresHomeView} ,
        { path: 'view', name: 'prestadores.view', component: PrestadoresView} ,
        { path: 'servicos', name: 'prestadores.servicos', component: PrestadoresServicosView} ,
    ]
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound.vue') }
  ],
})

export default router

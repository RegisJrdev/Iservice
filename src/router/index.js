import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeUserView.vue'
import RegisterView from '@/pages/register/RegisterView.vue'
import UsersView from '@/pages/users/UsersView.vue'
import PrestadoresView from '@/pages/prestadores/PrestadoresView.vue'
import PrestadoresHomeView from '@/pages/prestadores/PrestadoresHomeView.vue'

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
        { path: 'edit/:id', name: 'users.edit', component: () => import('@/pages/users/UsersEdit.vue') }
      ]
    },

    {
      path: '/prestadores', 
      children: [
        { path: '', name: 'prestadores.view', component: PrestadoresView} ,
        { path: 'dashboard', name: 'prestadores.home', component: PrestadoresHomeView} ,
    ]
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound.vue') }
  ],
})

export default router

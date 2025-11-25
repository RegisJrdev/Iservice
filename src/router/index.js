import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeUserView.vue'
import RegisterView from '@/pages/register/RegisterView.vue'
import UsersView from '@/pages/users/UsersView.vue'
import PrestadoresView from '@/pages/prestadores/PrestadoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    { path: '/', redirect: '/register' },
    { path: '/register', component: RegisterView },
    // { path: '/buscar', component: BuscarView },
    // { path: '/provider/dashboard', component: ProviderDashboard }
    {
      path: '/users',
      children: [
        { path: '', name: 'users.home', component: HomeView },
        { path: 'view', name: 'users.view', component: UsersView },
        { path: 'edit/:id', name: 'users.edit', component: () => import('@/pages/users/UsersEdit.vue') }
      ]
    },

    {path: '/prestadores', component: PrestadoresView},

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound.vue') }
  ],
})

export default router

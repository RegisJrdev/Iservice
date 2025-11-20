import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import RegisterView from '@/pages/register/RegisterView.vue'

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
        { path: '', name: 'users.view', component: () => import('@/pages/users/UsersView.vue') },
        { path: 'edit/:id', name: 'users.edit', component: () => import('@/pages/users/UsersEdit.vue') }
      ]
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiamondView from '../views/DiamondView.vue'
// import CartView from '../views/CartView.vue'
import SignupView from '../views/SignupView.vue'

import SigninView from '../views/SigninView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/diamond',
      name: 'diamond',
      component: DiamondView 
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/auth/signin',
      name: 'signin',
      component: SigninView
    }

  ]
})

export default router

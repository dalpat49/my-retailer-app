import { createRouter, createWebHistory } from 'vue-router'
import MyOrder from '../views/MyOrder2.vue'
import NewOffers from '../views/NewOffers.vue'
import Products from '../views/OurProducts.vue'
import LoginView from '../views/LoginView'
import NotificationsView from '../views/NotificaionView'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/my-order',
    name: 'my-order',
    component: MyOrder
  },
  {
    path: '/new-offers',
    name: 'offers',
    component: NewOffers
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

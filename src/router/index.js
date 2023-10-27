import { createRouter, createWebHistory } from 'vue-router'
import MyOrder from '../views/MyOrder2.vue'
import NewOffers from '../views/NewOffers.vue'
import Products from '../views/OurProducts.vue'
import LoginView from '../views/LoginView';
import OrderDetailsView from '../views/OrderDetail'
import UserCart from '../views/UserCart'

import NotificationsView from '../views/NotificaionView'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
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
    },
    {
      path: '/order-detail',
      name: 'orderDetal',
      component: OrderDetailsView
    },
    {
      path: '/user-cart',
      name: 'UserCart',
      component: UserCart
    },
  ],
})
export default router

import { createRouter, createWebHistory } from 'vue-router'
import MyOrder from '../views/MyOrder2.vue'
import NewOffers from '../views/NewOffers.vue'
import Products from '../views/OurProducts.vue'
import LoginView from '../views/LoginView'
import OrderDetailsView from './../views/OrderDetail'
import UserCart from './../views/UserCart'
import Outerlayout from './../layouts/OuterLayout'
import InnerLayout from './../layouts/InnerLayout'
import NotificationsView from '../views/NotificaionView'
import UserProfile  from './../views/UserProfile'
import ReferPoints  from './../views/ReferPoints.vue'
import EditProfile  from './../views/EditProfile.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/home',
    name: 'my-order',
    component:Outerlayout,
    redirect: '/',
    children:[
      {
          path:'/my-order',
          name:'Home',
          component:MyOrder
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
  ]
  },
  {
    path: '/inner',
    name: 'inner',
    component:InnerLayout,
    redirect: '/inner',
    children:[
      {
        path: '/inner/order-detail',
        name: 'orderDetal',
        component: OrderDetailsView
      },
      {
        path: '/inner/user-cart',
        name: 'UserCart',
        component: UserCart
      },
      {
        path: '/inner/user-profile',
        name: 'UserProfile',
        component: UserProfile
      },
      {
        path: '/inner/refer-points',
        name: 'ReferPoints',
        component: ReferPoints
      },
      {
        path: '/inner/edit-profile',
        name: 'EditProfile',
        component: EditProfile
      },
  ]
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router

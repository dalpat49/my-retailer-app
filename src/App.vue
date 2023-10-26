<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

import LoginView from "./views/LoginView.vue";

console.log(axios.defaults.baseURL);
const bottomNavigationvalue = ref("myOrder");


const bottomNavigationVariobales = ref([
  {
    value: "myOrder",
    name: "My Order",
    path: "/my-order",
    iconImage: "./img/bottomIcons/my-order.png", 
  },
  {
    value: "newOffers",
    name: "New Offers",
    path: "/new-offers",
    iconImage: "./img/bottomIcons/newOffers.png",
  },
  {
    value: "products",
    name: "Products",
    path: "/products",
    iconImage: "./img/bottomIcons/products.png",
  },
  {
    value: "notification",
    name: "Notifications",
    path: "/notifications",
    iconImage: "./img/bottomIcons/notification.png",
  },
]);

const userIsLogin = ref(false);

console.log(localStorage.getItem('userinfo'));
onMounted(()=>{
  if(localStorage.getItem('userinfo') != null ){
    userIsLogin.value = true;
  }
  else{
    userIsLogin.value = false;
  }
})
</script>

<template>

  <!-- if user is login start -->
  <div v-if="userIsLogin == true">
    <v-app>
      <!-- header bar start  -->
      <v-app-bar color="#ED1A3B" app class="px-2">
        <!-- avatar image and company logo -->
        <div class="d-flex">
          <!-- Avatar -->
          <v-avatar class="mr-2">
            <img src="./../public/avatar.png" alt="Avatar" width="200" />
          </v-avatar>
        </div>

        <!-- Company Logo start -->
        <v-toolbar-title class="ml-2">
          <v-img
            src="http://localhost:8080/logo.png"
            contain
            max-height="70"
            max-width="70"
          ></v-img>
        </v-toolbar-title>
        <!-- Company Logo end -->

        <!-- share btn start  -->
        <v-btn icon @click="openCart">
          <v-avatar class="p-2">
            <v-img src="./../../img/share.png" width="20" />
          </v-avatar>
        </v-btn>

        <!-- cart btn start  -->
        <v-btn icon @click="openCart">
          <v-avatar class="p-2">
            <v-img src="./../../img/cart.svg" width="20" />
          </v-avatar>
        </v-btn>
      </v-app-bar>
      <!-- header barend -->

      <!-- main components start -->
      <v-main>
        <router-view v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-main>
      <!-- main components end -->

      <!-- bottom navigatin start  -->
      <v-bottom-navigation
        v-model="bottomNavigationvalue"
        app
        grow
        color="teal"
      >
        <v-btn
          height="100%"
          v-for="(item, index) in bottomNavigationVariobales"
          :key="index"
          :to="item.path"
          :value="item.value"
        >
          <v-img :src="item.iconImage" width="20" />
          <span>{{ item.name }}</span>
        </v-btn>
      </v-bottom-navigation>
      <!-- bottom navigatin end  -->
    </v-app>
  </div>
  <!-- if user is login end -->

  <div v-if="userIsLogin == false ">
    <LoginView />
  </div>
</template>

<style lang="scss">
.slide-leave-active {
  transition: transform 0.175s ease-out;
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>

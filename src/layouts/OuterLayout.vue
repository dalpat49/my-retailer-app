<script setup>
import { onMounted, ref } from "vue";

import { useRouter } from "vue-router";
import { VBottomSheet } from "vuetify/labs/VBottomSheet";

import axios from "axios";

console.log(axios.defaults.baseURL);
const bottomNavigationvalue = ref("myOrder");
const router = useRouter();
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

console.log(localStorage.getItem("userinfo"));
onMounted(() => {
  if (localStorage.getItem("userinfo") != null) {
    userIsLogin.value = true;
  } else {
    userIsLogin.value = false;
  }
});
console.log(router.currentRoute);

const openCart = () => {
  router.push("/inner/user-cart");
};

const goToTheProfilePage = () => {
  router.push("/inner/user-profile");
};
</script>

<template>
  <div>
    <v-app-bar color="#ED1A3B" app class="px-2">
      <!-- avatar image and company logo -->
      <div class="d-flex">
        <!-- Avatar -->
        <v-avatar class="mr-2" @click="goToTheProfilePage">
          <img src="./../../public/avatar.png" alt="Avatar" width="200" />
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

      <v-bottom-sheet>
        <template v-slot:activator="{ props }">
          <div class="">
            <v-btn icon v-bind="props">
              <v-avatar class="p-2">
                <v-img src="./../../img/share.png" width="20" />
              </v-avatar>
            </v-btn>
          </div>
        </template>

        <VCard title="Bottom Sheet" class="rounded-t-3xl">
          <VCardText>
            <div class="flex">
              <div>
                <VImg src="/logo.png" width="70" height="70" />
              </div>
              <div class="ml-5">
                <p class="font-bold">Invite your friends</p>
                <p class="text-sm">
                  Hey's! Here's your special discount worth 100 on
                </p>
              </div>
            </div>
          </VCardText>
          <VCardText>
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">Share via</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
          </VCardText>

          <VCardText class="mb-15">
            <div class="flex justify-between">
              <div
                class="border-2 text-center w-32 h-10 flex align-center justify-center border-dashed text-lg font-bold"
              >
                rs@JO
              </div>

              <div class="flex">
                <div class="flex justify-center align-center mr-2">
                  <VBtn icon color="white" size="50">
                    <VImg
                      src="/img/whatsapp.svg"
                      class="mt-1"
                      width="40"
                    ></VImg>
                  </VBtn>
                </div>

                <div class="flex justify-center align-center">
                  <VBtn icon color="white" size="50">
                    <VIcon icon="fa fa-share-alt" />
                  </VBtn>
                </div>
              </div>
            </div>
          </VCardText>
        </VCard>
      </v-bottom-sheet>

      <!-- cart btn start  -->
      <v-btn icon @click="openCart">
        <v-avatar class="p-2">
          <v-img src="./../../img/cart.svg" width="20" />
        </v-avatar>
      </v-btn>
    </v-app-bar>
  </div>
  <div>
    <router-view></router-view>
  </div>

  <div>
    <!-- bottom navigatin start  -->
    <v-bottom-navigation v-model="bottomNavigationvalue" app color="teal">
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
  </div>
</template>

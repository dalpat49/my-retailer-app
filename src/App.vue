<script setup>
import { onMounted, ref } from "vue";

import { useRouter } from "vue-router";
import axios from "axios";

import LoginView from "./views/LoginView.vue";

console.log(axios.defaults.baseURL);
const router  = useRouter();


const userIsLogin = ref(false);

console.log(localStorage.getItem("userinfo"));
onMounted(() => {
  if (localStorage.getItem("userinfo") != null) {
    userIsLogin.value = true;
  } else {
    userIsLogin.value = false;
  }

  
});
console.log(router.currentRoute)


</script>

<template>
  <v-app>
    <!-- if user is login start -->
    <div v-if="userIsLogin == true">
      <!-- header bar start  -->
     
      <!-- header barend -->

      <!-- main components start -->
      <v-main class="bg-[#F5F5F5]" >
        <router-view  > 
        </router-view>
      </v-main>
      <!-- main components end -->

     
      <!-- bottom navigatin end  -->
    </div>
    <!-- if user is login end -->

    <div v-if="userIsLogin == false">
      <LoginView />
    </div>
  </v-app>
</template>

<style lang="scss">
.slide-leave-active {
  transition: transform 0.175s ease-out;
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>

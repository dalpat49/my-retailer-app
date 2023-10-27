<script setup>
import {defineProps , ref} from 'vue';

const props = defineProps({
  title:String,
  logOut:Boolean,
})

const NavTitle = ref(props.title)
const isProfileScreen = ref(props.logOut)
</script>

<template>
  <div>
    <v-app-bar color="#ED1A3B" app class="px-4">
      <!-- avatar image and company logo -->
      <div class="d-flex">
       <VBtn icon size="24" color="white" @click="$router.go(-1)"> <VIcon icon="fa fa-arrow-left"></VIcon></VBtn>
      </div>

      <!-- Company Logo start -->
      <v-toolbar-title class="ml-2 text-ce"> {{NavTitle}} </v-toolbar-title>
      <!-- Company Logo end -->

      <!-- share btn start  -->
      <div v-if="isProfileScreen">

          <VBtn icon size="24" color="white" @click="$router.go(-1)"> <VIcon icon="fa fa-sign-out"></VIcon></VBtn>
        </div>


      <!-- cart btn start  -->
    </v-app-bar>
  </div>
  
</template>

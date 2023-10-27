<script setup>
import { ref } from "vue";

import InnerLayoutNav from "@/layouts/InnerLayoutNav.vue";

const number = ref(9784771234);
const address1 = ref('Address Line 1');
const streetAddress = ref('Street Address');
const pincode = ref('Pincode');
const tehsil = ref('tehsil');
const district = ref('district');
const state = ref('state');
const reffer = ref('5555562485');
const email = ref('singhdalpat812@gmail.com');
</script>

<template>
  <div>
    <InnerLayoutNav title="Edit Profile"></InnerLayoutNav>
  </div>

  <!-- prile edit start  -->

  <div class="p-5">
    <div class="w-full mt-12 mb-3 rounded-md bg-white shadow-lg">
      <div class="relative">
        <div class="flex justify-center">
          <div class="relative -top-7">
            <VImg
              src="/avatar.png"
              alt=""
              class="rounded-full align-center"
              width="120"
            />
          </div>
          <div class="absolute m-3 bottom-0 right-32">
            <VBtn
              icon
              color="white"
              @click="$router.push('/inner/edit-profile')"
              class=""
            >
              <VIcon icon=" fa fa-edit"></VIcon
            ></VBtn>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- prile edit end -->

  <!-- form strat  -->
  <div>
    <div>
      <!-- first input  -->
      <div class="mb-6 px-5">
        <label
          for="large-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Edit Mobile Number</label
        >
        <input
          type="number"
          id="large-input"
          v-model="number"
          class="block w-full p-4 text-black font-bold border border-red-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <!-- Email input  -->
      <div class="mb-6 px-5">
        <label
          for="large-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Edit Email ID</label
        >
        <input
          type="email"
          v-model="email"

          id="large-input"
          class="block w-full font-bold p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <!-- Email input  -->

      <!-- referral input  -->
      <div class="mb-6 px-5">
        <label
          for="large-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Enter referral ID</label
        >
        <input
          type="text"
          v-model="reffer"
          id="large-input"
          class="block w-full font-bold p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <!-- referral input  -->

      <!-- address input  -->
      <div class="mb-6 px-5">
        <label
          for="large-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Edit Address</label
        >
        <input
          type="text"
          v-model="address1"
        
          id="large-input"
          class="block w-full font-bold mb-3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          id="large-input"
          v-model="streetAddress"

          class="block w-full font-bold mb-3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          id="large-input"
          v-model="tehsil"

          class="block w-full font-bold mb-3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          id="large-input"
          v-model="pincode"

          class="block w-full font-bold mb-3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          v-model="district"

          id="large-input"
          class="block w-full font-bold mb-3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />

        <input
          type="text"
          v-model="state"

          id="large-input"
          class="block w-full font-bold p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <!-- address input  -->
      <div class="w-full px-5 mb-6">
        <VBtn class="w-full text-lg" style="height: 54px !important;" color="#ED1A3B" ><span class="text-lg">save</span></VBtn>
      </div>
    </div>
  </div>
  <!-- form end  -->
</template>

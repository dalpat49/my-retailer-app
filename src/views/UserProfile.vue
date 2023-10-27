<script setup>

import InnerLayoutNav from '@/layouts/InnerLayoutNav.vue';
</script>


<template>

    <div>
        <InnerLayoutNav title="Profile" logOut="true"></InnerLayoutNav>
    </div>

    <div class="px-5">

        <!-- upper design start  -->
        <div class="w-full mt-12 mb-7  rounded-md bg-white shadow-lg ">
            <div class="relative">
                <div class="flex justify-center  ">
                    <div class="relative -top-7 ">
                        <VImg src="/avatar.png" alt="" class="rounded-full align-center" width="120" />
                    </div>
                    <div class="absolute m-3 right-0">
                        <VBtn icon color="white" @click="$router.push('/inner/edit-profile')" class=""> <VIcon icon=" fa fa-edit"></VIcon></VBtn>
                    </div>
                </div>
            </div>
            <div class="text-2xl  font-bold  pb-4 text-center text-[#343434]">
                Shagun bakary
            </div>
        </div>
        <!-- upper design end  -->

        <!-- bottom design start  -->
        <div class="w-full mt-1 py-5 mb-3 rounded-md px-4 bg-white shadow-lg " @click="$router.push('/inner/refer-points')">
            <div class="flex justify-between my-">
                <div class="text-md text-[#343434] font-bold">
                    My Refer Points
                </div>
                <div class="text-[#ED1A3B] font-bold text-md">
                    200 pts
                </div>
            </div>
            <div class="text-md mt-5 text-[#6D6D6D] font-bold">
                Refer By: Vinay Cold Drinks
            </div>
        </div>
        <!-- bottom design end  -->


        <!-- distibuter design start  -->
        <div class="w-full mt-1 py-5 mb-3 rounded-md px-4 bg-white shadow-lg ">
            <div class="flex justify-between my-">
                <div class="text-md text-[#343434] font-bold">
                    Your Distributor
                </div>
               
            </div>
            <div class="text-md mt-2 text-[#6D6D6D] font-bold ">
                Himanshi Colddrinks and Coldstorage Ailwal, Azamgarh, Uttar Pradesh, 276001
            </div>
        </div>
        <!-- distibuter design end  -->

        <!-- contact details design start  -->
        <div class="w-full mt-1 py-5 mb-10 rounded-md px-4 bg-white shadow-lg ">
            <div class="flex justify-between my-">
                <div class="text-md text-[#343434] font-bold">
                    Contact & Address
                </div>
               
            </div>
            <div class="text-md mt-2 text-[#6D6D6D] font-bold ">
              <i class="fa fa-phone text-[#37C179]"></i> 
              <span class="ml-2">
                +91 54458454511
              </span>
            </div>
            <div class="text-md mt-2 text-[#6D6D6D] font-bold ">
              <i class="fa fa-envelope   text-[#37C179]"></i>
              <span class="ml-2">ddindex56@gmail.com</span>
            </div>
            <div class="text-md mt-2 text-[#6D6D6D] font-bold ">
              <i class="fa fa-map-marker text-[#37C179]"></i> 
              <span class="ml-2">Ailwal, Azamgarh, Uttar Pradesh 276001</span>
            </div>
        </div>
        <!-- contact details design end  -->

    </div>
    
</template>
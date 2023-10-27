<script setup>
import InnerLayoutNav from "@/layouts/InnerLayoutNav.vue";
import { VBottomSheet } from "vuetify/labs/VBottomSheet";
</script>

<template>
  <div>
    <InnerLayoutNav title="My Refer Points"></InnerLayoutNav>
  </div>

  <div class="px-5 py-8 mb-4 border-b-2">
    <div class="w-full bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          Total Refer Points
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          200 pts
        </div>
      </div>
    </div>
  </div>

  <!-- user wise refer poinst start  -->
  <div class="px-5">
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          Aakash gupta
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          123 pts
        </div>
      </div>
    </div>
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">ram gupta</div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          222 pts
        </div>
      </div>
    </div>
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          shyam gupta
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          333 pts
        </div>
      </div>
    </div>
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          Aakash gupta
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          111 pts
        </div>
      </div>
    </div>
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          Aakash gupta
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          333 pts
        </div>
      </div>
    </div>
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          Aakash gupta
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          200 pts
        </div>
      </div>
    </div>
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          Aakash gupta
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          200 pts
        </div>
      </div>
    </div>
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          Aakash gupta
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          200 pts
        </div>
      </div>
    </div>
    <div class="w-full mb-3 bg-white px-5 h-50 align-center">
      <div class="flex justify-between h-16">
        <div class="text-[#343434] font-bold flex align-center">
          Aakash gupta
        </div>
        <div class="text-md text-[#ED1A3B] font-bold flex align-center">
          200 pts
        </div>
      </div>
    </div>
  </div>
  <!-- user wise refer poinst end  -->

  <v-bottom-sheet >
    <template v-slot:activator="{ props }">
      <div class="mb-3 px-5">
        <VBtn
          v-bind="props"
          style="height: 56px !important"
          class="w-full"
          color="#ED1A3B"
        >
          <img src="/img/share.png" width="20" class="mr-4" alt="" /> Refer
          more</VBtn
        >
      </div>
    </template>

    <VCard title="Bottom Sheet" class="rounded-t-3xl" >
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
                <VImg src="/img/whatsapp.svg" class="mt-1" width="40"></VImg>
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
</template>


<style scoped>
.v-bottom-sheet > .v-bottom-sheet__content.v-overlay__content > .v-card, .v-bottom-sheet > .v-bottom-sheet__content.v-overlay__content > .v-sheet{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
</style>
<script setup>
import { ref } from "vue";

const notifications = ref([]);

for (let i = 1; i <= 10; i++) {
  notifications.value.push({
    orderId: `#${i.toString().padStart(3, '0')}`,
    status: 'Confirmed',
    description: `Your order has been confirmed by your distributor. Expected delivery date is 22 Nov.`,
  });
}
</script>

<template>
  <section class="px-3 py-2">
    <!-- heading  -->
    <div class="font-bold my-2">
      <h4 class="h4 font-bold text-lg text-[#4F4E4E]">Our Products</h4>
    </div>

    <!-- search input start  -->
    <div class="my-3">
      <v-autocomplete
        class="rounded-lg shadow-xl border-none"
        style="border: none !important"
        label="Search Products"
        :items="['Jeera', 'Cola', 'lemon', 'sprit', 'Texas', 'Wyoming']"
      ></v-autocomplete>
    </div>
    <!-- search input end  -->

    <!-- card start  -->
    <div>
      <div
        class="w-full my-5 max-w-sm bg-white rounded-lg shadow-lg p-4 flex items-center" v-for="(item, index) in notifications" :key="index"
      >
        <!-- Notification Bell Icon -->
        <div class="mr-4 w-1/5  flex justify-center p-2 rounded-full bg-[#F5F5F5]">
          <img
          width="100"
            src="/img/newOfferImage/bell.png"
          />
        </div>
        <!-- Order Number and Message -->
        <div class="w-full">
          <div class="text-sm flex justify-between font-semibold">
            <div class="text-md">
              Order Number:{{ item.orderId}}
            </div>
            <div class="font-bold">
              Confirmed
            </div>
          </div>
          <div class="my-2 text-[#4F4E4E] font-semibold">Your order has been confirm by your distributor. Expected delivery date is 22 nov.</div>
        </div>
      </div>
    </div>
    <!-- card end  -->
  </section>
</template>

<style lang="scss" scoped></style>

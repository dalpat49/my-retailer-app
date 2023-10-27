<script setup>
import { ref } from "vue";

const newOfferData = ref([]);

for (let i = 1; i <= 20; i++) {
  const discount = "10%";
  const offerNo = `#${i.toString().padStart(3, "0")}`;

  // Generate a random date between 2022-01-01 and 2022-12-31
  const year = 2022;
  const month = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
  const day = Math.floor(Math.random() * 31) + 1; // Random day between 1 and 31
  const offerDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  newOfferData.value.push({
    discount,
    offerNo,
    offerDate,
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
        :items="[
          'Jeera',
          'Cola',
          'lemon',
          'sprit',
          'Texas',
          'Wyoming',
        ]"
      ></v-autocomplete>
    </div>
    <!-- search input end  -->

    <!-- card start  -->
    <div>
      <div
        class="w-full my-4  bg-white rounded-lg shadow-xl p-1 flex py-3"
        v-for="(item, index) in newOfferData"
        :key="index"
      >
        <!-- Left side with the image -->
        <div class="w-1/5 flex">
          <img
            src="./../../public/img/newOfferImage/bottel.jpeg"
            alt="Product Image"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <!-- Right side with product details -->
        <div class="w-3/4 pl-4">
          <div class="text-2xl text-[#343434] font-semibold">
            Wizz jeera <sup class="text-sm text-gray-500">200 ml</sup>
          </div>

          <!-- mrp and price st -->
          <div class="flex justify-between my-2">
            <div class="text-gray-500 text-sm">
              <Span class="font-bold text-[#4E4E4E]">MRP :</Span>

              ₹25.00
            </div>
            <div class="text-gray-500 text-sm">
              <Span class="font-bold text-[#4E4E4E]">My Price :</Span> ₹20.00
            </div>
          </div>

          <div class="text-gray-500 my-2">
            <p>
  
              <span class="font-bold text-[#4E4E4E]">Caret :</span> <span>10 * 20</span> <span class="ml-5">₹200.00</span>
            </p>
            <p>
  
              <span class="">Offer! Offer!</span> 
            </p>
          </div>
          <div class="mt-4 flex justify-end">
            <VBtn class="bg-red-500 text-white rounded-lg" color="#ED1A3B"
              >Add to cart</VBtn
            >
          </div>
        </div>
      </div>
    </div>
    <!-- card end  -->
  </section>
</template>

<style lang="scss" scoped></style>

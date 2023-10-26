
<script setup>
import {ref} from 'vue';


const newOfferData =ref([]);

for (let i = 1; i <= 20; i++) {
  const discount = '10%';
  const offerNo = `#${i.toString().padStart(3, '0')}`;
  
  // Generate a random date between 2022-01-01 and 2022-12-31
  const year = 2022;
  const month = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
  const day = Math.floor(Math.random() * 31) + 1; // Random day between 1 and 31
  const offerDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
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
      <h4 class="h4 font-bold text-lg text-[#4F4E4E]">New Offers</h4>
    </div>

    <!-- search input start  -->
    <div class="my-3">
      <v-autocomplete
        class="rounded-xl"
        label="Search Offer"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-autocomplete>
    </div>
    <!-- search input end  -->

    <!-- card start  -->
    <div>
      <div class="w-full my-4 max-w-sm bg-white rounded-lg shadow-xl p-1 flex py-3" v-for="(item ,index) in newOfferData" :key="index">
        <!-- Left side with the image -->
        <div class="w-2/4 flex ">
          <img
            src="./../../public/img/newOfferImage/bottel.jpeg"
            alt="Product Image"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <!-- Right side with product details -->
        <div class="w-3/3 px-4">
          <div class="text-[#08B542] font-bold text-lg">{{item.discount}}% Off</div>
          <div class="text-lg text-[#343434] font-semibold">
            on 10 box Winzz Jeera
          </div>
          <div class="flex justify-between">
            <div class="text-gray-500 text-sm">
              Offer No:
              <span class="text-[#ED1A3B]" style="font-weight: 800">
               {{ item.offerNo }}
              </span>
            </div>
            <div class="text-gray-500 text-sm">
              Date: <span class="font-bold"> {{ item.offerDate }} </span>
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <VBtn
              style="
                background-color: #ed1a3b14 !important;
                border: 1px solid #ed1a3b !important;
                color: #ed1a3b !important;
                font-weight: 700;
              "
              class="text-[#ED1A3B] rounded-lg mr-4" 
              >Add to Cart</VBtn
            >
            <VBtn class="bg-red-500 text-white rounded-lg" color="#ED1A3B"
              >Order Now</VBtn
            >
          </div>
        </div>
      </div>
    </div>
    <!-- card end  -->

  </section>
</template>


<style lang="scss" scoped></style>

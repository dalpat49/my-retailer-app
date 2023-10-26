<script setup>
import {ref} from 'vue';
const cardDetails = ref([]) ;

for (let i = 0; i < 20; i++) {
    const heading = `Heading ${i + 1}`;
    const statusOptions = ['Pending', 'Processing', 'Completed', 'Canceled'];
    const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
    const orderNo = `#${Math.floor(Math.random() * 1000)}`;
    const randomDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));

    const card = {
        heading,
        status: randomStatus,
        orderNo,
        Date: randomDate.toDateString()
    };

    cardDetails.value.push(card);
}

console.log(cardDetails.value);



</script>

<template>
  <section class="px-3 py-2">
    <!-- heading  -->
    <div class="font-bold my-2">
      <h4 class="h4 font-bold text-lg text-[#4F4E4E]">My Order</h4>
    </div>

    <!-- card start  -->
    <div>
      <!-- heading start  -->
      <div
        class="w-full my-3 max-w-sm bg-white rounded-lg shadow-xl p-4 flex flex-col items-start"
        v-for="(item , index) in cardDetails"
        :key="index"
      >
        <div class="flex items-center justify-between w-full">
          <div class="text-lg font-semibold line-clamp-1">
            {{item.heading.slice(0,20)}}...
          </div>
          <div
            class="ml-2 bg-[#FFEAD4] px-5 py-1 text-[#D25B00] font-bold rounded-lg"
          >
            {{item.status}}
          </div>
        </div>
        <!-- heading end  -->

        <!-- other start  -->
        <div class="flex justify-between w-full " >
          <!-- content start  -->
          <div>
            <div class="mt-2 text-gray-500">
              Order No: <span class="text-[#ED1A3B]"> {{ item.orderNo }}  </span>
            </div>
            <div class="text-gray-500">
              Date: <span class="font-bold">  {{ item.Date }} </span>
            </div>
          </div>
          <!-- content end  -->

          <!-- icons start  -->
          <div class="relative">

              <div class="mt-2 text-blue-500 absolute bottom-0 right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
          </div>
          <!-- icons end  -->
        </div>
        <!-- other end  -->
      </div>
    </div>
    <!-- card end  -->

  </section>
</template>

<style lang="scss" scoped></style>

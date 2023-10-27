<script setup>


import InnerLayoutNav from '@/layouts/InnerLayoutNav.vue';

</script>

<template>
    <div>
        <InnerLayoutNav title="My Cart" ></InnerLayoutNav>
    </div>
    
  <section class="px-3 py-2">
    <!-- heading  -->
    <div class="font-bold my-2">
      <h4 class="h4 font-bold text-lg text-[#4F4E4E]">3 Products</h4>
    </div>
  </section>

  <!-- products  -->
  <div class="px-4 my-3">
    <div
      class="w-full flex justify-around px-1 py-2 bg-white rounded-lg shadow-md"
    >
      <div>
        <!-- Product Image -->
        <img
          src="/img/winz-coc1.jpeg"
          alt="Product"
          class="w-auto h-32 object-contain"
        />
      </div>

      <div class="relative">
        <div>
          <!-- Product Name -->
          <div class="text-lg font-semibold text-[#4F4E4E]">
            Winzz Cola <sup class="text-[#777777]">200ml </sup>
          </div>
          <div class="text-sm text-[#777777]">Offer! Offer!</div>
        </div>

        <!-- Quantity Controls -->
        <div
          class="flex items-center align-bottom mb-2 w-100 absolute bg-[#F5F5F5] bottom-0 left-0"
        >
          <VBtn
            size="38"
            style="border: 1px solid #ed1a3b !important"
            color="white"
            class="p-2 border rounded-lg hover:bg-gray-100"
            @click="decreaseQuantity"
          >
            <VIcon icon="fa fa-minus" color="#ED1A3B"></VIcon>
          </VBtn>
          <span class="mx-7 text-xl font-semibold bg-[#F5F5F5]">2</span>
          <VBtn
            size="38"
            style="border: 1px solid #ed1a3b !important"
            color="white"
            class="p-2 border rounded-lg text-gray-600 hover:bg-gray-100"
            @click="increaseQuantity"
          >
            <VIcon icon="fa fa-plus" color="#ED1A3B"></VIcon>
          </VBtn>
        </div>
      </div>

      <div class="relative mb-2">
        <div class="text-sm text-[#BF1313]">Remove</div>
        <!-- Price -->
        <div class="absolute bottom-0 left-0">
          <div class="text-lg font-bold text-[#4F4E4E]">919.99</div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 my-3">
    <div
      class="w-full flex justify-around px-1 py-2 bg-white rounded-lg shadow-md"
    >
      <div>
        <!-- Product Image -->
        <img
          src="/img/winz-coc1.jpeg"
          alt="Product"
          class="w-auto h-32 object-contain"
        />
      </div>

      <div class="relative">
        <div>
          <!-- Product Name -->
          <div class="text-lg font-semibold text-[#4F4E4E]">
            Winzz Cola <sup class="text-[#777777]">200ml </sup>
          </div>
          <div class="text-sm text-[#777777]">Offer! Offer!</div>
        </div>

        <!-- Quantity Controls -->
        <div
          class="flex items-center align-bottom mb-2 w-100 absolute bg-[#F5F5F5] bottom-0 left-0"
        >
          <VBtn
            size="38"
            style="border: 1px solid #ed1a3b !important"
            color="white"
            class="p-2 border rounded-lg hover:bg-gray-100"
            @click="decreaseQuantity"
          >
            <VIcon icon="fa fa-minus" color="#ED1A3B"></VIcon>
          </VBtn>
          <span class="mx-7 text-xl font-semibold bg-[#F5F5F5]">2</span>
          <VBtn
            size="38"
            style="border: 1px solid #ed1a3b !important"
            color="white"
            class="p-2 border rounded-lg text-gray-600 hover:bg-gray-100"
            @click="increaseQuantity"
          >
            <VIcon icon="fa fa-plus" color="#ED1A3B"></VIcon>
          </VBtn>
        </div>
      </div>

      <div class="relative mb-2">
        <div class="text-sm text-[#BF1313]">Remove</div>
        <!-- Price -->
        <div class="absolute bottom-0 left-0">
          <div class="text-lg font-bold text-[#4F4E4E]">919.99</div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 my-3">
    <div
      class="w-full flex justify-around px-1 py-2 bg-white rounded-lg shadow-md"
    >
      <div>
        <!-- Product Image -->
        <img
          src="/img/winz-coc1.jpeg"
          alt="Product"
          class="w-auto h-32 object-contain"
        />
      </div>

      <div class="relative">
        <div>
          <!-- Product Name -->
          <div class="text-lg font-semibold text-[#4F4E4E]">
            Winzz Cola <sup class="text-[#777777]">200ml </sup>
          </div>
          <div class="text-sm text-[#777777]">Offer! Offer!</div>
        </div>

        <!-- Quantity Controls -->
        <div
          class="flex items-center align-bottom mb-2 w-100 absolute bg-[#F5F5F5] bottom-0 left-0"
        >
          <VBtn
            size="38"
            style="border: 1px solid #ed1a3b !important"
            color="white"
            class="p-2 border rounded-lg hover:bg-gray-100"
            @click="decreaseQuantity"
          >
            <VIcon icon="fa fa-minus" color="#ED1A3B"></VIcon>
          </VBtn>
          <span class="mx-7 text-xl font-semibold bg-[#F5F5F5]">2</span>
          <VBtn
            size="38"
            style="border: 1px solid #ed1a3b !important"
            color="white"
            class="p-2 border rounded-lg text-gray-600 hover:bg-gray-100"
            @click="increaseQuantity"
          >
            <VIcon icon="fa fa-plus" color="#ED1A3B"></VIcon>
          </VBtn>
        </div>
      </div>

      <div class="relative mb-2">
        <div class="text-sm text-[#BF1313]">Remove</div>
        <!-- Price -->
        <div class="absolute bottom-0 left-0">
          <div class="text-lg font-bold text-[#4F4E4E]">919.99</div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 my-3">
    <div
      class="w-full flex justify-around px-1 py-2 bg-white rounded-lg shadow-md"
    >
      <div>
        <!-- Product Image -->
        <img
          src="/img/winz-coc1.jpeg"
          alt="Product"
          class="w-auto h-32 object-contain"
        />
      </div>

      <div class="relative">
        <div>
          <!-- Product Name -->
          <div class="text-lg font-semibold text-[#4F4E4E]">
            Winzz Cola <sup class="text-[#777777]">200ml </sup>
          </div>
          <div class="text-sm text-[#777777]">Offer! Offer!</div>
        </div>

        <!-- Quantity Controls -->
        <div
          class="flex items-center align-bottom mb-2 w-100 absolute bg-[#F5F5F5] bottom-0 left-0"
        >
          <VBtn
            size="38"
            style="border: 1px solid #ed1a3b !important"
            color="white"
            class="p-2 border rounded-lg hover:bg-gray-100"
            @click="decreaseQuantity"
          >
            <VIcon icon="fa fa-minus" color="#ED1A3B"></VIcon>
          </VBtn>
          <span class="mx-7 text-xl font-semibold bg-[#F5F5F5]">2</span>
          <VBtn
            size="38"
            style="border: 1px solid #ed1a3b !important"
            color="white"
            class="p-2 border rounded-lg text-gray-600 hover:bg-gray-100"
            @click="increaseQuantity"
          >
            <VIcon icon="fa fa-plus" color="#ED1A3B"></VIcon>
          </VBtn>
        </div>
      </div>

      <div class="relative mb-2">
        <div class="text-sm text-[#BF1313]">Remove</div>
        <!-- Price -->
        <div class="absolute bottom-0 left-0">
          <div class="text-lg font-bold text-[#4F4E4E]">919.99</div>
        </div>
      </div>
    </div>
  </div>
  <!-- products end -->

</template>

<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// variables start
const router = useRouter();
const isUserPuttingNunmbers = ref(true);
const isUserPuttingOtp = ref(false);
const userNumber = ref(null);

onMounted(()=>{
  if(localStorage.getItem("userinfo") !== null){
    router.push('/my-order')
  }
})


//send otp functions
const sendTheOtptoUser = () => {
  try {
    if (userNumber.value == null || userNumber.value < 10) {
        alert('Please write a number less than 10');
    } else {
        isUserPuttingNunmbers.value = false;
      isUserPuttingOtp.value = true;
    }
  } catch (err) {
    console.log(err);
  }
};
// verify otp functions
const verifyuserOtp = () => {
  try {
    localStorage.setItem('userinfo' , 'dalpat')
    router.push("/my-order");
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
};

//change user number functions
const changeUserNumber = () => {
  try {
    isUserPuttingNunmbers.value = true;
    isUserPuttingOtp.value = false;
  } catch (err) {
    console.log(err);
  }
};
//otp auto froward code start
  function OTPInput() {
    const inputs = document.querySelectorAll("#otp > *[id]");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
          inputs[i].value = "";
          if (i !== 0) inputs[i - 1].focus();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== "") {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode);
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });
    }
  }

  onMounted(()=>{

    OTPInput();
  })

//otp auto froward code ends
</script>

<template>
  <section class="h-[100vh] bg-[#ED1A3B]">
    <div
      style="
        background: url('http://localhost:8080/mainlogo.jpeg') no-repeat;
        height: 60vh;
        background-size: cover;
        background-position: center;
        padding: 10px;
      "
    >
      <div
        class="absolute bottom-0 left-0 right-0 h-[40%] w-full bg-white rounded-t-3xl py-8 px-10"
      >
        <div v-if="isUserPuttingNunmbers">
          <div class="mb-10 mt-2">
            <label
              for="number"
              class="block font-bold mb-3 text-sm text-gray-900 dark:text-white"
              >Enter Your Mobile Number</label
            >
            <input
              v-model="userNumber"
              type="number"
              id="number"
              class="border h-14 border-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div class="mt-4">
            <VBtn
              class="w-full h-[48px]"
              @click="sendTheOtptoUser"
              size="large"
              color="#ED1A3B"
              >Get OTP</VBtn
            >
          </div>
        </div>
        <div v-if="isUserPuttingOtp">
          <p class="text-sm">We just sent an OTP on your mobile number..</p>
          <div class="mb-2 mt-2">
            <div class="flex justify-between">
              <p
                class="block font-bold mb-3 text-sm text-gray-900 dark:text-white"
              >
                +91 6367667129
              </p>
              <p
                @click.prevent="changeUserNumber"
                class="block font-bold mb-3 text-sm text-[#ED1A3B] dark:text-white"
              >
                change
              </p>
            </div>
            <div id="otp" class="flex flex-row justify-center text-center">
              <input
                class="m-2 border h-12 w-12 text-center form-control rounded"
                type="text"
                id="first"
                maxlength="1"
              />
              <input
                class="m-2 border h-12 w-12 text-center form-control rounded"
                type="text"
                id="second"
                maxlength="1"
              />
              <input
                class="m-2 border h-12 w-12 text-center form-control rounded"
                type="text"
                id="third"
                maxlength="1"
              />
              <input
                class="m-2 border h-12 w-12 text-center form-control rounded"
                type="text"
                id="sixth"
                maxlength="1"
              />
            </div>
          </div>
          <div class="mt-6">
            <VBtn
              class="w-full h-[48px]"
              @click.prevent="verifyuserOtp"
              size="large"
              color="#ED1A3B"
              >Login</VBtn
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

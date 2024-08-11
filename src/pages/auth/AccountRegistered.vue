<script  lang="ts">


export default {
  name:"AccountRegistered",

  data() {
      return {
        
      }
  },
  mounted() {
  
  },
  methods:{
    
  }
}
</script>
<template>
  <div
    class="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-teal-800">
    <div class="w-full md:w-1/2 flex flex-col justify-center items-center backdrop">
      <h1 class="text-3xl md:text-4xl font-extrabold  my-2 md:my-0 text-white">
        Maraka
      </h1>
      <p class="mb-2  hidden md:block font-bold uppercase text-white">
        Unlock your Market potential
      </p>
    </div>
    <div class="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
      <h3 class="mb-4 font-bold text-3xl flex items-center text-teal-500">
        Email Sent
      </h3>
      
      <p class="text-gray-700 text-sm mt-2">
        A link is sent to you email. Please check your email 
        and navigator to homepage here.
        <router-link :to="{ name: 'index' }"
          class="text-green-500 hover:text-amber-600 mt-3 focus:outline-none font-bold underline">
          Home
        </router-link>
      </p>

    </div>
  </div>
</template>
<style scoped>
.bg-image {
  background-image: url("../../assets/wwwhirl.svg");
  /* background-size: 100%; */
  background-position: center;
  /* background-repeat: no-repeat; */
}

.backdrop {
  backdrop-filter: blur(2px);
}


</style>
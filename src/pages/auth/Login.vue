<script  lang="ts">
import axios from 'axios';
import server  from "../../boot/server";
export default {
  name:"Login",

  data() {
      return {
        password:'',
        email:'',
      }
  },
  
  methods:{
    login(event:Event){
      event.preventDefault();
     const body = {
      username:this.email,
      password:this.password
     };
     axios.post(server+'/auth/login/',body)
     .then(response=>{
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('email',response.data.user.email);
      localStorage.setItem('full_name',response.data.user.full_name)
      localStorage.setItem('phone',response.data.user.phone1);
      localStorage.setItem('id',response.data.user.id)
      this.$router.push('/');
     }).catch(error=>{
      console.log(error);
     });
    }
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
        LOGIN
      </h3>
      <form  class="px-3 flex flex-col justify-center items-center w-full gap-3 " @submit="login">
        <input type="email" placeholder="email.." v-model="email"
          class="px-4 py-2 w-full rounded-2xl border border-blue shadow-sm text-base  placeholder-gray-600 placeholder-opacity-100 focus:outline-none focus:border-blue-500" required>
        <input v-model="password" type="password" placeholder="password.."
          class="px-4 py-2 w-full rounded-2xl border border-blue shadow-sm text-base  placeholder-gray-600 placeholder-opacity-100 focus:outline-none focus:border-blue-500" required>
        <button type="submit"
          class="flex justify-center items-center bg-teal-500 hover:bg-amber-600 text-white focus:outline-none focus:ring rounded px-3 py-1">
          <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
          </svg>
          <p class="ml-1 text-lg">
            Login
          </p>
        </button>
      </form>
      <p class="text-gray-700 text-sm mt-2">
        don't have an account?
        <router-link :to="{ name: 'register' }"
          class="text-green-500 hover:text-amber-600 mt-3 focus:outline-none font-bold underline">
          Create Account
        </router-link>
      </p>
      <p class="text-gray-700 text-sm mt-2">
      
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
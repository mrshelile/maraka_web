<script  lang="ts">
import axios from 'axios';
import {server}  from "../../boot/server";
import { decrypt } from '../../utils/Encryption';
export default {
  name:"ResetAccount",

  data() {
      return {
        repassword:"",
        password:'',
        email:"",
        verfied:false,
        isLoading:false,
        error:""
      }
  },
 async mounted() {
    let origin = this.$route.params;
    let email = decrypt(origin['email'].toString())
    let otp = decrypt(origin['otp'].toString())
    try {
        let res = await axios.get(server+"/list_users?search="+email)
        if (res.status ===200) {
        if (otp===res.data[0]['otp']) {
            this.verfied=true;
            this.email=email;
        }
        else{
            this.$router.push({name:"index"});
            this.isLoading =false;
        }
        }  else{
            this.$router.push({name:"index"})
        }  
    } catch (error) {
        
    }

  },
  methods:{
    async updatePassword(event:Event){
        event.preventDefault();
        let data = {"password": this.password.toString(),
        "email": this.email,
        };
        if (this.verfied) {
          this.isLoading =true;
          if (this.repassword===this.password) {
            try {
                
            let res = await axios.put(server+"/update-password",data);
            if (res.status===200) {
              this.isLoading = false;
              this.error =""
                this.$router.replace({name:"index"});
            }
            else{
              this.isLoading =false;
            this.error = "An internal error occurred while updating your password."+
            " Please try again later or contact our support team for further assistance. "
            }
            } catch (error) {
            this.isLoading =false;
            this.error = "An internal error occurred while updating your password."+
            " Please try again later or contact our support team for further assistance. "
            } 
          } else {
            this.isLoading =false;
            this.error = "Password confirmation failed. Please ensure that the password "+
            "and confirm password fields are identical and try again."
          } 
        }
        else{
          this.isLoading =false;
            this.$router.replace({name:"index"});
        }
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
        Update Password
      </h3>
      <form @submit="updatePassword" class="px-3 flex flex-col justify-center items-center w-full gap-3 ">
        <input type="password" placeholder="password.." v-model="password"
          class="px-4 py-2 w-full rounded-2xl border border-blue shadow-sm text-base  placeholder-gray-600 placeholder-opacity-100 focus:outline-none focus:border-blue-500" required>
        <input type="password" placeholder="password.." v-model="repassword"
          class="px-4 py-2 w-full rounded-2xl border border-blue shadow-sm text-base  placeholder-gray-600 placeholder-opacity-100 focus:outline-none focus:border-blue-500" required>
        <button type="submit"
          class="flex justify-center items-center bg-teal-500 hover:bg-amber-600 text-white focus:outline-none focus:ring rounded px-3 py-1">
          <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
          </svg>
          <p class="ml-1 text-lg">
            Update
          </p>
        </button>
      </form>
      <p class="text-gray-700 text-sm mt-2">
      
        <router-link :to="{ name: 'index' }"
          class="text-green-500 hover:text-amber-600 mt-3 focus:outline-none font-bold underline">
          Home
        </router-link>
      </p>
    </div>
  </div>
  <div class="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50" v-if="isLoading">
  <div class="flex justify-center items-center mt-[50vh]">
    <div class="fas fa-circle-notch fa-spin fa-5x text-cyan-500"></div>
  </div>
</div>
<div id="toast-danger" class="fixed top-10 left-1/2 -translate-x-1/2 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-50" role="alert" v-if="error">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        <span class="sr-only">Error icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">{{ error }}</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" @click="()=>error=''" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
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
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
        verfied:false
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
            this.$router.push({name:"index"})
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
          if (this.repassword===this.password) {
            try {
                
            let res = await axios.put(server+"/update-password",data);
            if (res.status===200) {
                this.$router.replace({name:"index"});
            }
            } catch (error) {
                
            } 
          } else {
            
          } 
        }
        else{
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
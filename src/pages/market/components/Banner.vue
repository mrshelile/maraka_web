<template>
     <div v-if="banners.length==0" class="w-screen h-72">
         <img :src="pictures[0]['src']" :alt="pictures[0]['alt']" class="object-cover h-full w-full"/>
     </div>
    <fwb-carousel v-else :pictures="banners" />
</template>
<script lang="ts">
import axios from 'axios';
import server from '../../../boot/server';
import { FwbCarousel } from 'flowbite-vue'
import buyandsell from '../../../assets/business.svg?url'
export default {
    name: "Banner",
    components:{
        FwbCarousel,
    },
    data() {
        return {
            pictures:[
            {src: buyandsell, alt: 'placeholder'},
            ],
            banners:[] as any[]
        }
    },
    methods: {
        async fetchBanners(){
            
        try {
            // Assume you have the banners response from the initial axios.get() call
        const bannersResponse = await axios.get(`${server}/banners`);

        // Extract the banners array from the response
        const banners = bannersResponse.data;

        // Filter out banners where splashscreen is false

        const filteredBanners = banners.filter((banner:any) => banner.splashscreen);

        // console.log(filteredBanners);
        // Create an array of promises to fetch the sub-data for each banner
        const promises = filteredBanners.map((banner:any) => {
        // Fetch the sub-data for each banner using axios.get()
        return axios.get(banner.display);
        });
        
        // Use Promise.all() to wait for all promises to resolve
        const subDataResponses = await Promise.all(promises);

        // Map the sub-data responses to the corresponding banners
        this.banners= filteredBanners.map((banner:any, index:any) => {
        // Get the sub-data response for the current banner
        const subDataResponse = subDataResponses[index];

        // Extract the sub-data from the response
        const subData = subDataResponse.data;

        // Return the banner with the sub-data
        return {'alt':banner['owner'],'src': subData['image'] };
        });
   
        } catch (error) {
            
          }
        }        
    },
    mounted() {
        this.fetchBanners()
    },
}
</script>
<style scoped></style>
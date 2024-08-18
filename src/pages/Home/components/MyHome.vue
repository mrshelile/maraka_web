<script lang="ts">
import buyandsell from '../../../../src/assets/buy.svg?url'
import { FwbCarousel } from 'flowbite-vue'
import Vue from 'vue';
export default {
    name: "MyHome",
    props:['banners'],
    data(vm:any) {
        return{
            buyandsell:buyandsell,
            // banners:[] as any[]
        }
    },
    methods: {
               
    },
    components:{
        FwbCarousel,
    },
    mounted() {
     
        this.$store.commit("startNav");
    },
    created() {
        this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
}
</script>

<template>
           
    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                    <span class="text-amber-700">The</span> Fastest Growing Global <span
                        class="text-cyan-700">Marketplace</span>
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Your
                    Ultimate Car Destination. <span class="text-teal-700"> Discover a diverse range of cars and
                        products</span> .Download our app for a seamless car shopping experience. Find your dream car with
                    <span class=" text-sky-900">Maraka</span> today!.
                </p>
                <a href='/ads-page'
                    class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get Started
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>

            </div>
           
            <fwb-carousel :pictures="this.$props.banners" class="lg:mt-0 lg:col-span-5" />
        </div>
    </section>
</template>

<style scoped>
.carousel-lg {
    width: 800px; /* increase the width */
    height: 600px; /* increase the height */
  }
</style>
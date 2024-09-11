<template>
     <div v-if="banners.length==0" class="w-screen h-72">
         <img :src="pictures[0]['src']" :alt="pictures[0]['alt']" class="object-cover h-full w-full"/>
     </div>
    <!-- <fwb-carousel v-else :pictures="$props.banners" class='fwb-carousel' /> -->
    <carousel :items-to-show="1"  >
        <slide v-for="slide in $props.banners" :key="slide" class="max-h-[30rem]  md:max-h-[20rem] lg:max-h-[30rem]">
            <img :src="slide['src']" :alt="slide['alt']" class="object-fill h-full w-full"/>
        </slide>
    
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
</template>
<script lang="ts">
import { FwbCarousel } from 'flowbite-vue'
import buyandsell from '../../../assets/business.svg?url'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: "Banner",
    props:{
        banners:{
            type:Array<any>,
            required:true
        } as any
    },
    data(vm) {
        return {
            pictures:[
            {src: buyandsell, alt: 'placeholder'},
            ],
        }
    },
    components:{
        FwbCarousel,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    methods: {
              
    },
    mounted() {
        
    },
}
</script>
<style scoped>
.fwb-carousel {
    /* add your custom styles here */
    max-width: 100%;
    height: 300px; /* adjust the height as needed */
    object-fit:scale-down;
    
  }
</style>
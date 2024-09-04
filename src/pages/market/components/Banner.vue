<template>
     <div v-if="banners.length==0" class="w-screen h-72">
         <img :src="pictures[0]['src']" :alt="pictures[0]['alt']" class="object-cover h-full w-full"/>
     </div>
    <fwb-carousel v-else :pictures="$props.banners" />
</template>
<script lang="ts">
import { FwbCarousel } from 'flowbite-vue'
import buyandsell from '../../../assets/business.svg?url'
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
    },

    methods: {
              
    },
    mounted() {
        
    },
}
</script>
<style scoped></style>
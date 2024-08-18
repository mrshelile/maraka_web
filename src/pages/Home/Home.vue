<script lang="ts">

import LoadingComponetVue from '../../components/LoadingComponet.vue';
import ErrorComponetVue from '../../components/ErrorComponet.vue';
import { defineAsyncComponent, ref } from 'vue';
import {getBanners} from '../../utils/data/getData';
const banners = ref([]); 
const asyncMyHome =defineAsyncComponent({
  loader: () => getBanners().then((data)=>
{   
    banners.value=data;
    return import('./components/MyHome.vue')
}),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponetVue,
  loadingComponent: LoadingComponetVue
})

export default {
    name: "Home",
    data(vm:any) {
        return{
        
        }
    },
    methods: {
             
    },
    components:{
        'MyHome': asyncMyHome,
       
    },
   async mounted() {
        // this.fetchBanners();
        // console.log(await getBanners())
        this.$store.commit("startNav");
    },
    created() {
        this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
    setup(){

        return {
            banners
        }
    }
}
</script>

<template>
    <MyHome :banners="banners" />
</template>

<style scoped>
.carousel-lg {
    width: 800px; /* increase the width */
    height: 600px; /* increase the height */
  }
</style>
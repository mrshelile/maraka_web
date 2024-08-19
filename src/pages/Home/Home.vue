<script lang="ts">

import LoadingComponetVue from '../../components/LoadingComponet.vue';
import ErrorComponetVue from '../../components/ErrorComponet.vue';
import { defineAsyncComponent, ref } from 'vue';
import {getBanners} from '../../utils/data/getData';
import {v4 as uuidv4} from 'uuid';

const banners = ref([]); 
const asyncMyHome =defineAsyncComponent({
  loader: () => getBanners(true).then((data)=>
{   
    banners.value=data;
    return import('./components/MyHome.vue')
}),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponetVue,
  loadingComponent: LoadingComponetVue,
  
});

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
        
        this.$store.commit("startNav");
    },
    created() {
        let myuuid = uuidv4();

        if(!localStorage.getItem("viewer"))
        {   
           
            localStorage.setItem("viewer",myuuid);
        }
       
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
    <MyHome  :banners="banners" />
</template>

<style scoped>
.carousel-lg {
    width: 800px; /* increase the width */
    height: 600px; /* increase the height */
  }
</style>
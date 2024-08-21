<script lang="ts">

import LoadingComponetVue from '../../components/LoadingComponet.vue';
import ErrorComponetVue from '../../components/ErrorComponet.vue';
import { defineAsyncComponent, ref } from 'vue';
import {getBanners} from '../../utils/data/getData';
import {v4 as uuidv4} from 'uuid';

export default {
    name: "Home",
    components:{
        'MyHome': defineAsyncComponent({
        loader: async() =>
        {   await getBanners(true);
            return import('./components/MyHome.vue')
        },
        delay: 1000,
        timeout: 3000,
        errorComponent: LoadingComponetVue,
        loadingComponent: LoadingComponetVue,
        
        }),
       
    },
    data() {
        return{
            banners:[]
        }
    },
    setup() {
       
    },

   async mounted() {
        
        this.$store.commit("startNav");
    },
    async created() {
        this.banners =await getBanners(true);
        let myuuid = uuidv4();

        if(!localStorage.getItem("viewer"))
        {   
           
            localStorage.setItem("viewer",myuuid);
        }
       
        this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
    
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
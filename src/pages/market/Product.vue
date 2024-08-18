<template>
  <MyProduct :data="product"/>
</template>
<script lang="ts" scoped>
import 'flowbite'
import { defineAsyncComponent, ref } from 'vue';
import {extractProductData} from '../../utils/data/getData';
import LoadingComponetVue from '../../components/LoadingComponet.vue';
import ErrorComponetVue from '../../components/ErrorComponet.vue';

const product= ref({});
let pathname:string ='';
let id=0;
try {
     pathname = Object(window.location.pathname);
     id = Number(Object(pathname).match(/\/(\d+)$/)[1]); // Extract the last part of the path that matches one or more digits

} catch (error) {
    
}

const asyncProduct =defineAsyncComponent({
  loader: () => extractProductData(id).then(async (data)=>
    {  
        if (!data || Object.keys(data).length === 0) {
        // Bounce back when there is no data
        return Promise.reject('No product data available');
        }
        product.value= data;
        console.log(data);
        return import('./components/MyProduct.vue');
    }),
    delay: 1000,
    timeout: 10000,
    errorComponent: ErrorComponetVue,
    loadingComponent: LoadingComponetVue
    });
export default {
    name: "Product",
    components:{
     "MyProduct":asyncProduct
    },
    data() {
        return {
            product
        }
    },
    setup(){
        return{

        }
    },
    methods: {
        
    },
    mounted() {
        this.$store.commit("startNav");
    },
    created() {
        this.$store.commit("startNav");
    },
}
</script>
<style scoped></style>
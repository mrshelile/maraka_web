<template>
    <MyMarket :banners="banners" :products="products"/>
</template>
<script lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import {getBanners,fetchProducts} from '../../utils/data/getData';
import LoadingComponetVue from '../../components/LoadingComponet.vue';
import ErrorComponetVue from '../../components/ErrorComponet.vue';

const banners = ref([]); 
const products = ref([]);
const asyncMyMarket =defineAsyncComponent({
  loader: () => getBanners(true).then(async (data)=>
    {   
        banners.value=data;
        products.value= (await fetchProducts()) as [];
        // console.log(products.value);
        return import('./components/MyMarket.vue');
    }),
    delay: 600,
    timeout: 10000,
    errorComponent: ErrorComponetVue,
    loadingComponent: LoadingComponetVue
    });
export default {
    name: "Market",
    mounted() {
        this.$store.commit("startNav");
    },
    created() {
        this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
    components: {
        'MyMarket':asyncMyMarket
    },
    setup(){
        return{
            banners,
            products
        }
    }
}
</script>
<style scoped></style>
<template>
    <MyMarket v-if="banners.length!=0 || products.length!=0"
     :banners="banners" :products="products"/>
</template>
<script lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import {getBanners,fetchProducts} from '../../utils/data/getData';
import LoadingComponetVue from '../../components/LoadingComponet.vue';
import ErrorComponetVue from '../../components/ErrorComponet.vue';


export default {
    name: "Market",
    mounted() {
        this.$store.commit("startNav");
    },
    async created() {
        this.banners  =await getBanners(true);
        this.products = (await fetchProducts()) as any[];
        this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
    data(vm) {
        return{
            banners:[] as any[],
            products:[] as any[]
        }
    },
    components: {
        'MyMarket':defineAsyncComponent({
            loader: async() =>
        {   
            await getBanners(true);
            await fetchProducts();
            return import('./components/MyMarket.vue');
            },
            delay: 600,
            timeout: 10000,
            errorComponent: ErrorComponetVue,
            loadingComponent: LoadingComponetVue
        })
    },
  
}
</script>
<style scoped></style>
<template>
    <div>
        <!-- {{ this.$props.banners }}
        {{ this.$props.products }} -->
        <Banner :banners="this.$props.banners"/>
        <ProductList :data="this.$props.products"/>
        <MyAdsButton v-if="$store.state.isLogin"/>
    </div>
</template>
<script lang="ts">
import ProductList from '../../market/components/ProductsList.vue'
import { Iproduct } from '../../../interfaces/Iproduct';
import Banner from './Banner.vue';
// import 'flowbite'
import MyAdsButton from './MyAdsButton.vue';
export default {
    name: "Market",
    props:{
        banners:{
            type:Array<any>,
            required:true
        },
        products:{
            type:Array<Iproduct>,
            required:true,
        }
    },
    mounted() {
        this.$store.commit("startNav");
    },
    created() {
        this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
    components: {
        ProductList,
        Banner,
       MyAdsButton
    },

}
</script>
<style scoped></style>
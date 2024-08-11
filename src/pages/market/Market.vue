<template>
    <div>
        <Banner/>
        <ProductList />
        <MyAdsButton v-if="$store.state.isLogin"/>
    </div>
</template>
<script lang="ts">
import ProductList from '../market/components/ProductsList.vue'
import Banner from './components/Banner.vue';
// import 'flowbite'
import MyAdsButton from './components/MyAdsButton.vue';
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
        ProductList,
        Banner,
       MyAdsButton
    }
}
</script>
<style scoped></style>
<template>
    <div class="fixed bottom-4 right-4">
        <a :href="$router.resolve({name:'Myads', }).href" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
        My Ads
        </a>
</div>
</template>
<script lang="ts">
export default {
    name: "MyAdsButton",
    mounted() {
        // this.$store.commit("startNav");
    },
    created() {
        // this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
    components: {
        
    }
}
</script>
<style scoped></style>
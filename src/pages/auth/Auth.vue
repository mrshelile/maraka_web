<script  lang="ts">

export default {
    name: "Auth",
    mounted() {
        this.$store.commit("stopNav");
    },
    created() {
        this.$store.commit("stopNav");
        // console.log(this.$store.state.isNavigation);  
    },
    components: {
     
    }
}
</script>
<template>
    <div class="h-screen w-full flex justify-center items-center bg-gray-300 home-bg-image ">
    <router-view></router-view>
    </div>
</template>

<style  scoped>
.home-bg-image {
    background-image: url('../../assets/ssscribble.svg');
    background-repeat: repeat;
    background-size: auto;
    height: 100vh;
}


</style>

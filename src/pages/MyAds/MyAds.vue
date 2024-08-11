<template>
    <div>      
        <MyProductsList/>
        <CreateAdButton/>
    </div>
</template>
<script lang="ts">
import CreateAdButton  from "./components/CreateAdButton.vue";
import MyProductsList from "./components/MyProductsList.vue"
export default{
    name:"MyAds",
    mounted() {
        this.$store.commit("startNav");
    },
    created() {
        this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
    components: {
    CreateAdButton,
    MyProductsList
    }
}
</script>
<style scoped></style>
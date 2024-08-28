<template>
  <MyProduct v-if="product" :data="product"/>
</template>
<script lang="ts" scoped>
import 'flowbite'
import { defineAsyncComponent, ref,defineComponent } from 'vue';
import {extractProductData} from '../../utils/data/getData';
import LoadingComponetVue from '../../components/LoadingComponet.vue';
import ErrorComponetVue from '../../components/ErrorComponet.vue';

export default defineComponent({
    name: "Product",
    components:{
     "MyProduct":defineAsyncComponent({
    loader: async() => 
        {   
            let pathname:string ='';
            let id=0;
            try {
                pathname = Object(window.location.pathname);
                id = Number(Object(pathname).match(/\/(\d+)$/)[1]); // Extract the last part of the path that matches one or more digits

            } catch (error) {
                
            }
            await extractProductData(id);
            return import('./components/MyProduct.vue');
            
        },
        delay: 1000,
        timeout: 3000,
        errorComponent: LoadingComponetVue,
        loadingComponent: LoadingComponetVue
        })
        },
    data() {
        return {
            product:[]
        }
    },
    methods: {
        
    },
   async mounted() {
        let id:number = Number.parseInt(this.$route.params.id.toString())
        this.product = await extractProductData(id);
        this.$store.commit("startNav");
    },
    async created() {
        let id:number = Number.parseInt(this.$route.params.id.toString())
        this.product = await extractProductData(id);
        // console.log(this.product)
        this.$store.commit("startNav");
    },
})
</script>
<style scoped></style>
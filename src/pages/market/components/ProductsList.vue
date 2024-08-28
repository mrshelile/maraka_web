<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">

                <button id="categoriesMenu" data-dropdown-toggle="dropdownMenu"
                    class="text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">{{ current_category }} <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg></button>

                <!-- Dropdown menu -->
                <div id="dropdownMenu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44
                dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" v-for="index,category in all_categories" :key="index" aria-labelledby="multiLevelDropdownButton">
                        <li>
                            <a @click="changeCategory(category)"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 
                                dark:hover:text-white">
                                {{ category }}
                            </a>
                        </li>

                    </ul>
                </div>
            </h2>
            <div v-if="products.length==0" class="grid grid-cols-1 mt-6 sm:grid-cols-1 md:grid-cols-1  rounded-md gap-1">
                
                <div>
                    <h2 class="text-lg font-bold">Product Not Available</h2>
                    <p class="text-gray-600 ">This is currently no data at the moment. Please check back later for availability.</p>
                       
                </div>
            </div>
        
      
            
            <div v-else class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <a :href='`/ads-page/${product.id}`' @click="setViewer(product.id)" class="group relative" v-for="product in current_products" :key="product.id">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="Object(product.display)[0]['image']"
                            :alt="product.name.toString()"
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                    </div>
                    <div class="mt-4 ">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <a  v-if="product.category=='cars'">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {{ Object(product.car).year +" "+Object(product.car).model + " "
                                    + Object(product.car).make }}
                                </a>
                                <a  v-else>
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {{product.name}}
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500  max-h-20 overflow-y-auto ">
                            {{ product.description }}
                            </p>
                        </div>
                        <p class="text-sm font-medium text-gray-900">M{{ product.price }}</p>
                    </div>
                </a>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {createProductViews} from '../../../utils/data/getData'; 
import { Iproduct } from '../../../interfaces/Iproduct';
import {v4 as uuidv4} from 'uuid';
export default {
    name: "ProductList",
    props:{
        data:{
            type:Array<Iproduct>,
            required:true,
        }
    },
    data() {
      return {
       products:this.$props.data,
       current_products:this.$props.data,
       current_category:"All Categories",
       all_categories:["cars","miscellaneous","All Categories"]
      }
  },
  methods: {
    async setViewer(id:number){
        let myuuid = uuidv4();
        // product.id
        if(!localStorage.getItem("viewer"))
        {   
            localStorage.setItem("viewer",myuuid);
        }else{
            // alert(localStorage.getItem("viewer"))
           await createProductViews(id,localStorage.getItem("viewer"))
        }  
    },
    changeCategory(category:any){
        this.current_products =[];
     this.current_category=category;
     
     for (let index = 0; index < this.products.length; index++) {
        const element:Iproduct = this.products[index];
        if (this.current_category=='All Categories') {
         this.current_products.push(element);
        }
       else if (element.category == this.current_category) {
            this.current_products.push(element);
        }
     }

    },
 
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
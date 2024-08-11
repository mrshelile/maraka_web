<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">

            <div class="mt-0  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <router-link :to="{ name: 'product', params: { id: product.id }, }" class="group relative" v-for="product in products" :key="product.id">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="Object(product.display)[0]['image']"
                        alt="product.name"
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                    </div>
                    <div class="mt-4 ">
                        <div>
 
                            <h3 class="text-sm text-gray-700">
                                <a  v-if="product.category=='cars'">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {{ Object(product).car.year +" "+Object(product).car.model + " "+ Object(product).car.make }}
                                </a>
                                <a  v-else>
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {{product.name}}
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500 text-ellipsis max-h-20 overflow-y-auto">{{ product.description }}</p>
                        </div>
                        <p class="text-sm font-medium text-gray-900">M{{product.price}}</p>
                    </div>
                </router-link>

                <!-- More products... -->
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios';
import { Iproduct } from '../../market/interfaces/Iproduct';
import server from '../../../boot/server';

export default {
    name:"MyProductsList",
    data() {
      return {
        products:[] as Iproduct[]
      }
  },
  methods: {
    async fetchMyProducts(){
      try {
        const email = localStorage.getItem('email')?.toString();
        
        const response = await axios.get(server+'/product', {
            params: {
            search: email
            }
        }); 
        if (response.status == 200) {
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                let item:Iproduct ={
                    category: element.category,
                    id: element.id,
                    created: element.created,
                    owner: element.owner,
                    name: element.name,
                    description: element.description,
                    price: element.price,
                    expired_date: element.expired_date,
                    identifier: element.identifier,
                    display: element.display
                };
                this.products.push(item);  
            }
        }
      } catch (error) {
        
      }
    }
  },
  mounted() {
    this.fetchMyProducts();
  },
}
</script>
<style scoped></style>
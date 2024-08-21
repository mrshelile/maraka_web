<template>
    <section class="py-12 sm:py-16">
        <div class="container mx-auto px-4">
            

            <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div class="lg:col-span-3 lg:row-end-1">
                    <div v-if="displays.length==0" class="w-12/12 h-72">
                        <img :src="pictures[0]['src']" :alt="pictures[0]['alt']" class="object-cover h-full w-full"/>
                    </div>
                   <fwb-carousel v-else :pictures="displays" />
                </div>

                <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                        {{ product.category=='cars'?
                        Object(product.car)['year']+" "+Object(product.car)['model'] +" "+ Object(product.car)['make']
                        : product.name}}
                    </h1>

                    <div class="mt-5 flex items-center">
                        <div class="flex">
                            {{ owner['phone1'] }} {{owner['email']}}
                        </div>
                        <p class="ml-2 text-sm font-medium text-gray-500">{{ owner['full_name']}}</p>
                    </div>

                    <div v-if="product['category']=='cars' && product['price']>20000" >
                        <h2 class="mt-8 text-base text-gray-900">Months</h2>

                        <div class="relative w-full">
                            <!-- <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                
                            </div> -->
                            <input type="number" id="simple-search" v-model="months"  @input="calcDeposit"
                            :class="[

                                'bg-gray-50',

                                'border',

                                'text-gray-900',

                                'text-sm',

                                'rounded-lg',

                                'focus:ring-blue-500',

                                'focus:border-blue-500',

                                'block',

                                'w-full',

                                'pl-10',

                                'p-2.5',

                                'dark:bg-gray-700',

                                'dark:border-gray-600',

                                'dark:placeholder-gray-400',

                                'dark:text-white',

                                'dark:focus:ring-blue-500',

                                'dark:focus:border-blue-500',

                                isValid ? 'border-gray-300' : 'border-red-500'

                                ]"
                                placeholder="Months">
                        </div>


                    

                    <h2 class="mt-8 text-base text-gray-900">Deposit</h2>

                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            LSL
                        </div>
                        <input type="number" id="simple-search" v-model="deposit" @input="calcMonths"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Amount">
                    </div>
                    </div>


                    <div
                        class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                        <div class="flex items-end">
                            <h1 class="text-3xl font-bold">M{{ product['price'] }}</h1>
                            <!-- <span class="text-base">/month</span> -->
                        </div>
                    </div>

                </div>

                <div class="lg:col-span-3">
                    <div class="border-b border-gray-300">
                        <nav class="flex gap-4">
                            <a  title=""
                                class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                                Description </a>

                            <a  title=""
                                class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                                Views
                                <span
                                    class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                                    {{viewers}} </span>
                            </a>
                        </nav>
                    </div>

                    <div class="mt-2 flow-root sm:mt-2">
                        <div v-if="product.category=='cars'">
                            <h2 class="text-lg font-bold mb-2">
                                {{ product.category=='cars'?
                                Object(product.car)['year']+" "+Object(product.car)['model'] +" "+ Object(product.car)['make']
                                : product.name}}
                            </h2>
                            <p class="text-base mb-4">This powerful vehicle runs on <span class="text-orange-500">{{ Object(product.car)['fuel'] }}</span>
                                 fuel and features a <span class="text-blue-500">{{ Object(product.car)['transmission'] }}</span> transmission.</p>
                            <p class="text-base">With a mileage of <span class="font-bold">{{ Object(product.car)['kilos'] }} km</span></p>
                        </div>
                        <br/>
                        <p class="overflow-y-auto h-40">
                            {{ product.description }}
                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" scoped >
import 'flowbite'
import { Iproduct } from '../../../interfaces/Iproduct';
import placeholder from '../../../assets/business.svg?url';
import { FwbCarousel } from 'flowbite-vue'


export default {
    name: "MyProduct",
    components:{
        FwbCarousel,
    },
    props:['data'],
    data() {
        return {
            pictures:[
            {src: placeholder, alt: 'placeholder'},
            ],
            displays:this.$props.data['displays']??[],
            isValid:true,
            product:this.$props.data['product']??{} as Iproduct,
            viewers:this.$props.data['viewers']??0 ,
            deposit:0,
            months:0,
            owner:{}  as any
        }
    },
    methods: {
        calcMonths(){
            if(this.deposit==0 || this.deposit>this.product.price || this.deposit<5000){
                this.months=1;
            }else{
                this.months = Math.round(this.product.price/this.deposit);
            }
        },
        calcDeposit(){
            if(this.months==0 ||this.months>12){
                this.isValid=false;
                this.deposit=this.product.price;
                
            }else{
            this.isValid=true;
            let value = this.product.price/this.months;
            this.deposit = value;
            }
        },

       
    },
    mounted() {
        
    },
}
</script>
<style scoped></style>
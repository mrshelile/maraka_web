<script lang="ts">
import BusinessLogo from '../../../src/assets/business.svg?url'
import HuaweiLogo from '../../../src/assets/huawei.svg?url'
export default {
    name: "About",
    methods: {},
    data(vm) {
        return {
            business: BusinessLogo,
            huawei:HuaweiLogo
        }
    },
    mounted() {

        this.$store.commit("startNav");
    },
    created() {

        this.$store.commit("startNav");
        // console.log(this.$store.state.isNavigation);  
    },
}
</script>
<template>
<section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                    <span class="text-amber-700">About</span> Maraka
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <span class="text text-teal-800"> Maraka</span> is primarily a buy and sell cars App. The App showcases
                    thousands of cars sold by individual
                    owners and car dealers in and around Lesotho. The App also boasts buying and selling miscellaneous
                    products and services which are any products and services.
                    <span class="text text-teal-800"> Maraka</span> does not facilitate <spna
                        class="text text-2xl text-cyan-800"> eCommerce</spna> on the App
                    directly thus seller only showcases their cars and
                    miscellaneous products and services.
                    Get your dream car, download the App today.
                    For more Information sent email to <span class="text text-emerald-900">info@maraka.co.ls</span>
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <a href="https://play.google.com/store/apps/details?id=com.maraka.maraka "
                            class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6"
                                viewBox="0 0 512 512">
                                <path
                                    d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                                </path>
                            </svg>
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                                <span class="title-font font-medium">Google Play</span>
                            </span>
                        </a>
                    </div>
                    <!-- <div>
                        <button
                            class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <img :src="huawei" alt="Huawei Logo" class="w w-10">
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs text-gray-600 mb-1">Download on the</span>
                                <span class="title-font font-medium">Huawei</span>
                            </span>
                        </button>
                    </div> -->
                   
                    <!-- <div>
                        <button
                            class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6"
                                viewBox="0 0 305 305">
                                <path
                                    d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z">
                                </path>
                                <path
                                    d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z">
                                </path>
                            </svg>
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs text-gray-600 mb-1">Download on the</span>
                                <span class="title-font font-medium">App Store</span>
                            </span>
                        </button>                        
                    </div> -->
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img :src="business" alt="buyandsell">
            </div>
        </div>
    </section>
</template>
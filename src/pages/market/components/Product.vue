<template>
    <section class="py-12 sm:py-16">
        <div class="container mx-auto px-4">
            <nav class="flex">
                <ol role="list" class="flex items-center">
                    <li class="text-left">
                        <div class="-m-1">
                            <a href="#"
                                class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                Home </a>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#"
                                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                    Cars </a>
                            </div>
                        </div>
                    </li>

                    <li class="text-left">
                        <div class="flex items-center">
                            <span class="mx-2 text-gray-400">/</span>
                            <div class="-m-1">
                                <a href="#"
                                    class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                    aria-current="page"> Toyota </a>
                            </div>
                        </div>
                    </li>
                </ol>
            </nav>

            <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div class="lg:col-span-3 lg:row-end-1">
                    <div id="controls-carousel" class="relative w-full" data-carousel="static">
                        <!-- Carousel wrapper -->
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <!-- Item 1 -->
                            <div class=" duration-700 ease-in-out" data-carousel-item v-for="i in 5" :key="i">
                                <img src="https://file.naijauto.com/crop/390x293/2018/01/12/SPwLa8M2/toyota-corolla-2003--7671.jpg"
                                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="...">
                            </div>

                        </div>
                        <!-- Slider controls -->
                        <button type="button"
                            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev>
                            <span
                                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button"
                            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next>
                            <span
                                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">2003 Toyota Corolla</h1>

                    <div class="mt-5 flex items-center">
                        <div class="flex">
                            56984388 davertzshelile@gmal.com
                        </div>
                        <p class="ml-2 text-sm font-medium text-gray-500">Malefetsane Shelile</p>
                    </div>

                    <h2 class="mt-8 text-base text-gray-900">Payment term(months)</h2>


                    <input id="minmax-range" type="range" min="0" max="10" value="5"
                        class="w-full h-2 bg-emerald-600 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">


                    <h2 class="mt-8 text-base text-gray-900">Deposit</h2>

                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            LSL
                        </div>
                        <input type="number" id="simple-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Amount">
                    </div>


                    <div
                        class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                        <div class="flex items-end">
                            <h1 class="text-3xl font-bold">M60.50</h1>
                            <!-- <span class="text-base">/month</span> -->
                        </div>
                    </div>

                </div>

                <div class="lg:col-span-3">
                    <div class="border-b border-gray-300">
                        <nav class="flex gap-4">
                            <a href="#" title=""
                                class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                                Description </a>

                            <a href="#" title=""
                                class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                                Reviews
                                <span
                                    class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                                    1,209 </span>
                            </a>
                        </nav>
                    </div>

                    <div class="mt-8 flow-root sm:mt-12">
                        <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
                        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt
                            fuga.</p>
                        <h1 class="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
                        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.
                        </p>
                        <p class="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit
                            amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import 'flowbite'
export default {
    name: "Product"
}
</script>
<style scoped></style>
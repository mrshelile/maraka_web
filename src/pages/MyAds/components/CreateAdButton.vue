<template>
    <div class="fixed bottom-4 right-4 z-60">
        <button data-modal-target="create-add-modal" data-modal-toggle="create-add-modal"  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
        Create Ad
       </button>
    </div>
    

<!-- Main modal -->
<div id="create-add-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Create New Advert
                </h3>
                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="create-add-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <form class="space-y-4" @submit="createProduct">
                    <!-- component -->
                    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">


                        <div class="relative slide">
                            <div class="carousel-indicators absolute bottom-0 flex bg-white h-24 w-full justify-center items-center">
                                <ol class="z-50 flex w-4/12 justify-center">
                                    <li v-for="(img, i) in selectedImages" :key="i"
                                        class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"></li>
                                </ol>
                            </div>
                            <div class="carousel-inner relative overflow-hidden w-full">
                                <div v-for="(img, i) in selectedImages" :id="`slide-${i}`" :key="i"
                                    :class="`${active === i ? 'active' : 'left-full'}`"
                                    class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
                                    <img class="block w-full" :src="img" alt="First slide" />
                                </div>
                            </div>
                        </div>
                        <div class="-mx-3 md:flex md:mb-0">
                        <div class="md:w-full px-3">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload images</label>
                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" 
                            @change="selectImageChange" multiple accept="image/*">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                SVG, PNG, JPG ,JPEG or GIF (MAX. 800x400px).</p>
                                

                        </div>
                        </div>
                        <div class="-mx-3 md:flex mb-2">

                        <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                        Categories
                        </label>
                            <div class="relative">
                                <select @change="categoryChange" v-model="categories" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                                <option >Cars</option>
                                <option selected>miscellaneous</option>
                                </select>
                            </div>
                        </div>

                        </div >
                        <div class="grid grid-cols-2 gap-2" v-if="!isCar">
                            <div class="md:w-full px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-name">
                                    Name
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-name" type="text" placeholder="..." v-model="name">
                            </div>
                            <div class="md:w-full px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-price">
                                    Price
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-price" type="number" placeholder="M" v-model="price">
                           </div>
                            
                        </div>
                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="description" class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Description</label>
                            <textarea id="description" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                             placeholder="Write description..." required v-model="description"></textarea>
                        </div>
                        <div id="car" v-if="isCar">
                            <div class="grid grid-cols-2 gap-2">
                            <div class="md:w-full px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-year">
                                   Year
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-year" type="number" placeholder="Year..." v-model="year">
                            </div>
                            <div class="md:w-full px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-model">
                                    Model
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-model" type="text" placeholder="Model.." v-model="model">
                           </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="md:w-full px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-make">
                                   Make
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-make" type="text" placeholder="Make..." v-model="make">
                            </div>
                            <div class="md:w-full px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-fuel-type">
                                    Fuel Type
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-fuel-type" type="text" placeholder="Fuel.." v-model="fuel">
                           </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="md:w-full px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-mileage">
                                 Mileage
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-year" type="number" placeholder="Mileage..." v-model="mileage">
                            </div>
                            <div class="md:w-full px-3 mb-6 ">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-car-price">
                                    Price
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-car-price" type="number" placeholder="M" v-model="price">
                           </div>
                          
                        </div>
                        <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-transmission">
                            Transmission
                            </label>
                                <div class="relative">
                                    <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-transmission" v-model="transimission">
                                    <option >Automatic</option>
                                    <option selected>Manual</option>
                                    </select>
                                </div>
                        </div>
                        </div>
                        </div>  
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Create
                        </button>
                                
                </form>
            </div>
        </div>
    </div>
</div> 

</template>
<script lang="ts">
import corouselPlaceHolder from '../../../assets/upload.png'
import server from '../../../boot/server';
export default{
    name:'CreateAdButton',
    data() {
        return{
            isCar:false,
            name:'',
            price:0.0,
            description:'',
            year:0,
            model:0,
            make:'',
            fuel:'',
            mileage:'',
            transimission:'Automatic',
            categories:'miscellaneous',
            selectedImages:[
            corouselPlaceHolder,
            corouselPlaceHolder,
            ],
            uploadFiles:[] as FormData[],
            active: 0
        }
    },
    mounted() {
        let i = 0;
        setInterval(() => {
        if (i > this.selectedImages.length - 1) {
            i = 0;
        }
        this.active = i;
        i++;
        }, 2000);
    },
    methods: {
    categoryChange(event:Event){
      this.isCar=!this.isCar;
    },
    async  postImages(index:number):Promise<any> {
      let res= await fetch(server+"/multi-image",{
        method:"POST",
        body:this.uploadFiles[index]
        }).catch(error=>{
            console.log("Error",error);

        });
        
        return res;
    },
    async createProduct(event:Event){
        event.preventDefault();
      let imgs =[];
      try {
        for (let index = 0; index < this.uploadFiles.length; index++) {
            // const element = this.uploadFiles[index];
            const im =await (await this.postImages(index)).json();
            imgs.push(im.id);
            
        }
       
      } catch (error) {
        console.log(error);
      }
      console.log(imgs);
    },
    selectImageChange(event: Event) {
        const input = event.target as HTMLInputElement;
        const files = input.files;
        if (!files) return;
        this.selectedImages = []; // Clear existing images

        // Iterate through selected files
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            let formdat:FormData = new FormData();
            formdat.append('image',file);
            this.uploadFiles.push(formdat);
            const reader = new FileReader();

            reader.onload = () => {
                // Ensure the result is a string
                const result = reader.result as string;
                if (typeof result === 'string') {
                   // Convert the result into an image URL
                    const imageUrl = URL.createObjectURL(file);
                    this.selectedImages.push(imageUrl);
                    console.log('Selected Images:', this.selectedImages);
                }
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(file);
            }
        },
    },
    watch: {
    },


}
</script>
<style scoped>
	.left-full {
			left: -100%;
		}

		.carousel-item {
			float: left;
			position: relative;
			display: block;
			width: 100%;
			margin-right: -100%;
			backface-visibility: hidden;
		}

		.carousel-item.active {
			left: 0;
		}
</style>
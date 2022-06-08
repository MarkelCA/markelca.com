<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
    <div class="w-full mx-auto mt-10 flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0 bg-indigo-700">
        <div class="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0">
            <div class="w-8/12 flex flex-col justify-start items-start">
                <div>
                    <p class="text-3xl xl:text-4xl font-semibold leading-9 text-white">Blog</p>
                </div>
                <div class="mt-4">
                    <p class="text-left text-base leading-6 text-white" >My humle space to share my thoughts about people and technology.</p>
                </div>
                <div class="mt-6 w-full">
                    <button class="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14  text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                        <p class="text-xl font-medium leading-5">See More</p>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66663 16H25.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 21.3333L25.3333 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 10.6667L25.3333 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                            
                    </button>
                </div>
            </div>  

            <div class="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                <div class="">
                   <img class="lg:block" src="https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png" alt="sofa" />
                </div>
                <div class="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                    <div>
                        <img class="lg:block w-60"  src="../assets/blog.jpg" alt="chairs"  />
                    </div>
                    <div>
                       <img class="lg:block" src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chairs" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


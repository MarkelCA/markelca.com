<template>
    <div class="bg-gray-200 w-full h-full">
        <!-- Navigation starts -->
        <nav class="w-full mx-auto bg-white shadow">
            <div class="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                <div class="h-full flex items-center">
                    <div class="mr-10 flex items-center">
                        <svg aria-label="Home" id="logo" enable-background="new 0 0 300 300" height="44" viewBox="0 0 300 300" width="43" v-bind:xmlns="xmlns" :xmlns:xlink="xlink">
                            <g>
                                <path
                                    fill="#4c51bf"
                                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                />
                            </g>
                        </svg>
                        <h3 class="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">MarkelCA</h3>
                    </div>

                    <ul class="pr-12 xl:flex items-center h-full hidden space-x-8">
                        <a class='py-3 hover:text-indigo-700'><li class="cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal">About</li></a>
                        <a class='py-3 hover:text-indigo-700'><li class="cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal">Projects</li></a>
                        <a class='py-3 hover:text-indigo-700'><li class="cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal">Blog</li></a>
                        <a class='py-3 hover:text-indigo-700'><li class="cursor-pointer h-full flex items-center text-sm text-gray-800 tracking-normal">Contact</li></a>
                    </ul>
                </div>


                <div class="visible xl:hidden flex items-center">
                    <ul class="z-40 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                        <li class="flex xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-3 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div class="flex items-center">
                                <span class="leading-6 ml-2 font-bold"> About </span>
                            </div>
                        </li>
                        <li class="xl:hidden flex-col cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" @click="dropdownHandler($event)">
                            <div class="flex items-center">
                                <span class="leading-6 ml-2 font-bold"> Projects </span>
                            </div>
                            <ul class="ml-2 mt-3 hidden">
                                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Landing Pages</li>
                                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Templates</li>
                                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Components</li>
                            </ul>
                        </li>
                        <li class="xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <span class="leading-6 ml-2 font-bold">Blog</span>
                        </li>
                        <li class="xl:hidden flex-col cursor-pointer text-gray-600 text-base leading-3 tracking-normal mb-2 py-3 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" @click="dropdownHandler($event)">
                            <div class="flex items-center">
                                <span class="leading-6 ml-2 font-bold"> Contact </span>
                            </div>
                            <ul class="ml-2 mt-3 hidden">
                                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Landing Pages</li>
                                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Templates</li>
                                <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Components</li>
                            </ul>
                        </li>
                        <li>
                            <hr class="border-b border-gray-300 w-full" />
                        </li>
                        <li class="ml-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <div class="flex items-center">
                                <div class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                    <img class="rounded h-10 w-10 object-cover" v-bind:src="profilePhoto" alt="logo" />
                                </div>
                                <p class="leading-6 text-base ml-1 cursor-pointer">Jane Doe</p>
                                <div class="sm:ml-2 text-white relative">
                                    <svg v-bind:xmlns="xmlns" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </li>
                        <li class="ml-2 cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div class="flex items-center">
                                <svg v-bind:xmlns="xmlns" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span class="leading-6 ml-2">Profile</span>
                            </div>
                        </li>
                    </ul>

                    <svg @click="MenuHandler($event, true)" aria-haspopup="true" aria-label="Main Menu" v-bind:xmlns="xmlns" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="4" y1="8" x2="20" y2="8"></line>
                        <line x1="4" y1="16" x2="20" y2="16"></line>
                    </svg>
                    <div class="hidden close-m-menu" @click="MenuHandler($event, false)">
                        <svg aria-label="Close" v-bind:xmlns="xmlns" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Navigation ends -->
        <!-- Page title ends -->
    </div>
</template>

<script>
export default {
    name: "LightWithGreyBackground",
    data() {
        return {
            xmlns: "http://www.w3.org/2000/svg",
            xlink: "http://www.w3.org/1999/xlink",
            profilePhoto: "https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png",
        };
    },
    methods: {
        dropdownHandler(event) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
        MenuHandler(el, val) {
            let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
            let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
            let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
            if (val) {
                MainList.classList.remove("hidden");
                el.currentTarget.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            } else {
                showIcon.classList.remove("hidden");
                MainList.classList.add("hidden");
                el.currentTarget.classList.add("hidden");
            }
        },
    },
};
</script>
<style scoped>
a {
  color: #000;
  text-decoration: none;
  
  display: inline-block;
  position: relative;
}
a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  @apply bg-indigo-700;
  /*background: #000;*/
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}
</style>

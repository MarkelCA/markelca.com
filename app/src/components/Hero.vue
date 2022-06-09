<script setup>
    import SectionTitle from './SectionTitle.vue'
    import Social from './Social.vue'
</script>

<template>
    <div id='about' class='md:w-2/4 m-auto font-sans mt-14 font-sans'>
        <img class='rounded-full m-auto mb-8' src="../assets/markelca.png">
        <h1 class='text-4xl'>Markel Cuesta - <span class='text-indigo-700'>Fullstack Developer</span></h1>
        <h2 class='text-2xl my-6 text-gray-500 border-b-2'>Who am I</h2>
        <p class='text-gray-500 italic'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <Social/>
    </div>
</template>

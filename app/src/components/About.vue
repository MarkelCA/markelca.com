<script setup>
    import { ref } from 'vue'
    import SectionTitle from './SectionTitle.vue'
    const count = ref(0)
</script>

<template>
    <div class='md:w-2/4 m-auto font-sans mt-14 font-sans'>
        <img class='rounded-full m-auto mb-8' src="../assets/markelca.png">
        <h1 class='text-4xl'>Markel Cuesta - <span class='text-indigo-700'>Fullstack Developer</span></h1>
        <button @click="count++">You clicked me {{ count }} times.</button>
    </div>
</template>

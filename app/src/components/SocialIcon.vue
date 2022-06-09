<script setup>
    defineProps(['link', 'image'])
</script>
<template>
        <a :href='link' target='_blank' class='p-2'><img class='w-12 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-115 hover:shadow-2xl border-2 border hover:border-indigo-500' :src='image'/></a>
</template>

<script setup>
    defineProps(['link', 'image'])
</script>
<template>
        <a href={{link}} target='_blank' class='p-2'><img @mouseover="onHover" class='w-12 rounded-full shadow-lg animate__animated ' src={{image}}/></a>
</template>

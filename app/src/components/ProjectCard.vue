<script setup>
    defineProps(['name', 'description', 'url'])
</script>
<template>
<div class="flex justify-center">
  <div class="block w-full h-full m-2 p-6 border rounded-lg shadow-lg bg-white max-w-sm  transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-2xl">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-left">{{name}}</h5>
    <p class="text-gray-700 text-base mb-4 text-left">
      {{description}}
    </p>
    <p class="text-gray-500 text-base mb-8 text-left">
      Last updated 3 days ago
    </p>
    <a target='_blank' class='absolute bottom-0 m-4 left-0' :href='url'><button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Github</button></a>
  </div>
</div>
</template>

<style scoped>
</style>

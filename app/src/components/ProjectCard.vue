<script setup>
    defineProps(['name', 'description'])
</script>
<template>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm transition duration-500 ease-in-out transform hover:-translate-y-4 hover:shadow-2xl">
    <a href="#!">
      <img class="rounded-t-lg w-full" src="https://picsum.photos/400/300" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{name}}</h5>
      <p class="text-gray-700 text-base mb-4">{{description}}</p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
</template>

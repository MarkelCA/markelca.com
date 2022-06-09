<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
const props = defineProps(['page', 'repos'])
const emit = defineEmits(['update:page', 'update:repos'])
    
const getRepos = (newPage) => {
    emit('update:page', newPage)
    axios
        .get(`https://api.github.com/users/markelca/repos?per_page=${6}&page=${newPage}`)
        .then(response => {
            emit('update:repos', response.data)
        })
        .catch((error) => console.log(error))
}
onMounted(() => {
    getRepos(props.page)
})
</script>

<template>
    <button @click='getRepos'>More</button>
<div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item disabled" @click='getRepos(page - 1)'><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
          href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">1</a></li>
      <li class="page-item active"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
          href="#">2 <span class="visually-hidden"></span></a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">3</a></li>
      <li class="page-item" @click='getRepos(page + 1)'><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">Next</a></li>
    </ul>
  </nav>
</div>
</template>

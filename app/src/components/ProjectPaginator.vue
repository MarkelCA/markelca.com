<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
const props = defineProps(['page', 'repos'])
const emit = defineEmits(['update:page', 'update:repos'])
const page = ref(1)
    
const totalPages = ref(0)
const pageSize = 6

const getRepos = (newPage) => {
    axios
        .get(`https://api.github.com/users/markelca/repos?per_page=${pageSize}&page=${newPage}`)
        .then(response => {
            emit('update:repos', response.data)
        })
        .catch((error) => console.log(error))
}
onMounted(() => {
    getRepoCount()
    getRepos(props.page)
})

const getRepoCount = () => {
    axios
        .get('https://api.github.com/users/MarkelCA')
        .then(response => {
            totalPages.value = Math.ceil(response.data.public_repos / pageSize) 
        })
        .catch((error) => console.log(error))
}

</script>

<template>
<div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item disabled" @click='getRepos(page - 1)'><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
           tabindex="-1" aria-disabled="true">Previous</a></li>

      <li v-for='n in totalPages' class="page-item" @click='getRepos(n)'><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" >{{n}}</a>
     </li>
      <li class="page-item" @click='getRepos(page + 1)'><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">Next</a></li>
    </ul>
  </nav>
</div>
</template>

<style scoped>
    .current-page {
        @apply bg-blue-600 text-white hover:bg-blue-600 hover:text-white shadow-md focus:shadow-md 
    }
</style>

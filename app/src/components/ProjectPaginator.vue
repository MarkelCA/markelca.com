<script setup>
import axios from 'axios'
import { ref, watch, onMounted } from 'vue'
const props = defineProps(['repos'])
const emit = defineEmits(['update:repos'])
const page = ref(1)
    
const totalPages = ref(0)
const pageSize = 6

const getRepos = (newPage) => {
    if(newPage > totalPages.value || newPage < 1) return;
    axios
        .get(`https://api.github.com/users/markelca/repos?per_page=${pageSize}&page=${newPage}`)
        .then(response => {
            emit('update:repos', response.data)
            page.value = newPage
        })
        .catch((error) => console.log(error))
}

onMounted(() => {
    getRepoCount()
})

watch(totalPages, (newX) => {
    getRepos(page.value)
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
    <ul class="flex list-style-none space-x-2">

      <li class="page-item cursor-pointer select-none" @click='getRepos(page - 1)' v-bind:class = "(page == 1 )?'disabled':''"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded hover:bg-gray-200 focus:shadow-none">Previous</a>

          </li>

      <li v-for='n in totalPages' class="page-item cursor-pointer" @click='getRepos(n)'><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none select-none " v-bind:class = "(page == n )?'current-page':''">{{n}}</a>
     </li>
      <li class="page-item cursor-pointer select-none" @click='getRepos(page + 1)' v-bind:class = "(page == totalPages )?'disabled':''"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded hover:bg-gray-200 focus:shadow-none">Next</a></li>
    </ul>
  </nav>
</div>
</template>

<style scoped>
    .current-page {
        @apply bg-blue-600 text-white hover:bg-blue-600 hover:text-white shadow-md focus:shadow-md 
    }
    .disabled {
        @apply text-gray-500
    }
</style>

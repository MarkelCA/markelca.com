<script setup>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
const repos = ref([])

onMounted(() => {
    axios
        .get('https://api.github.com/users/markelca/repos')
        .then(response => {
            repos.value = response.data
            console.log(repos)
        })
})
</script>
<template>
    <div id='project-list' class='flex flex-wrap space-x-2 md:space-x-8 sm:space-y-6 md:space-y-0 flex-col md:flex-row lg-flex-row'>
        <ProjectCard v-for='repo in repos' :name='repo.name' :description='repo.description'/>
    </div>
</template>

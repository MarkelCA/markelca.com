<script setup>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import ProjectPaginator from './ProjectPaginator.vue'

const repos = ref([])
const page = ref(1)

const getRepos = (e) => {
    page.value++
    axios
        .get(`https://api.github.com/users/markelca/repos?per_page=${6}&page=${page.value}`)
        .then(response => {
            repos.value = response.data
            console.log(response.data)
        })
        .catch((error) => console.log(error))
}
onMounted(() => {
  getRepos()
})
</script>
<template>
    <button @click='getRepos'>More</button>
    {{page}}
    <ProjectPaginator v-model='page'/>
    <div id='project-list' class='grid grid-cols-1 sm:grid-cols-3'>
        <ProjectCard v-for='repo in repos' :name='repo.name' :description='repo.description'/>
    </div>
    <ProjectPaginator/>
</template>

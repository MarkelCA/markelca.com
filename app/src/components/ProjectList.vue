<script setup>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import ProjectPaginator from './ProjectPaginator.vue'

const repos = ref([])

</script>
<template>
    <ProjectPaginator v-model:repos='repos'/>
    <div id='project-list' class='grid grid-cols-1 sm:grid-cols-3'>
        <ProjectCard v-for='repo in repos' :name='repo.name' :description='repo.description'/>
    </div>
    <ProjectPaginator v-model:repos='repos'/>
</template>

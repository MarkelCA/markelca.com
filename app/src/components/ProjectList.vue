<script setup>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import ProjectPaginator from './ProjectPaginator.vue'

const repos = ref([])

</script>
<template>
    <div id='project-list' class='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        <ProjectCard v-for='repo in repos' :name='repo.name' :description='repo.description' :url='repo.html_url' :updated='repo.updated_at'/>
    </div>
    <ProjectPaginator v-model:repos='repos' class='mt-12'/>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { ref, onMounted } from 'vue'
import ProjectPaginator from './ProjectPaginator.vue'

const repos = ref([])
const page = ref(1)

</script>
<template>
    {{page}}
    <ProjectPaginator v-model:page='page' v-model:repos='repos'/>
    <div id='project-list' class='grid grid-cols-1 sm:grid-cols-3'>
        <ProjectCard v-for='repo in repos' :name='repo.name' :description='repo.description'/>
    </div>
</template>

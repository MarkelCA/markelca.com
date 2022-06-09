<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './HelloWorld.vue'
import SectionTitle from './SectionTitle.vue'
import ProjectList from './ProjectList.vue'
</script>

<template>
    <div id='projects' class='md:w-3/4 m-auto'>
        <SectionTitle title='Projects'/>
        <ProjectList/>
    </div>
</template>


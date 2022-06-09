<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Blog from './components/Blog.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header/>
  <Hero />
  <ProjectsSection/>
  <Blog/>
  <Footer/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

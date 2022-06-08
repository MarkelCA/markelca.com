<script setup>
import SocialIcon from './SocialIcon.vue'
    const socials = [
        {
            link: 'https://github.com/MarkelCA',
            img:  '../assets/github.png'
        },
        {
            link: 'https://github.com/MarkelCA',
            img:  '../assets/github.png'
        }
    ]
</script>
<template>
    <div id='social' class='py-6 flex space-x-4 place-content-center'>
        <!--<SocialIcon v-for='social in socials' link='eu' image='../assets/github.png'/>-->
        <a href='https://github.com/MarkelCA' target='_blank' class='p-2'><img class='w-12 rounded-full shadow-lg animate__animated ' src='../assets/github.png'/></a>
        <a href='mailto:hire@markelca.com' target='_blank' class='p-2'><img class='w-12 rounded-full shadow-lg' src='../assets/gmail.png'/></a>
        <a href='https://www.linkedin.com/in/markel-cuesta' target='_blank' class='p-2'><img class='w-12 rounded-full shadow-lg' src='../assets/linkedin.png'/></a>
    </div>
</template>


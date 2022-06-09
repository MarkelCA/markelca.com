<script setup>
import SocialIcon from './SocialIcon.vue'
    const socials = [
        {
            link: 'https://www.linkedin.com/in/markel-cuesta/',
            img:  '/linkedin.png'
        },
        {
            link: 'mailto:hire@markelca.com',
            img:  '/gmail.png'
        },
        {
            link: 'https://github.com/MarkelCA',
            img:  '/github.png'
        }
    ]
</script>
<template>
    <div id='social' class='py-6 flex space-x-4 place-content-center'>
        <SocialIcon v-for='social in socials' :link='social.link' :image='social.img'/>
    </div>
</template>


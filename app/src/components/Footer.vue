<template>
<footer class="text-center lg:text-left bg-gray-100 text-gray-600 mt-8">
  <div class="text-center p-6 bg-gray-200">
    <a class="text-gray-600 border text-md font-mono py-2" target='_blank' href="https://github.com/MarkelCA/markelca.com">Source code</a>
  </div>
</footer>
</template>

<style scoped>
a {
  text-decoration: none;
  
  display: inline-block;
  position: relative;
}
a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  @apply bg-gray-400;
  /*background: #000;*/
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}
</style>

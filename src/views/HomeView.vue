<template>
  <div>
    <Navbar />

    <Hero />
    <TheStory />
    <Artists />
    <Band />
    <SponsorsBar />
    <Gallery />
    <!-- <Contact /> -->

    
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import TheStory from '../views/TheStory.vue'
import Artists from '../views/Artists.vue'
import Band from '../views/Band.vue'
import SponsorsBar from '../components/SponsorsBar.vue'
import Gallery from '../views/Gallery.vue'



</script>

<style scoped>
div{
  background: #050505;
}
</style>
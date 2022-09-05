<script setup>
import Hero from '../components/Hero.vue';
import Description from '../components/Description.vue';
import MarqueeSection from '../components/MarqueeSection.vue';
import Preloader from '../components/Preloader.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

</script>

<template>
  <main class="bg-black">
    <Preloader/>
    <Header/>
    <Hero/>
    <Description/>
    <MarqueeSection/>
    <Footer/>
  </main>
</template>

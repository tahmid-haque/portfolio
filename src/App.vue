<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import About from './components/About.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Experience from './components/experience/Experience.vue';
import Skills from './components/skills/Skill.vue';
import AOS from 'aos';
import { onMounted } from 'vue';

onMounted(() => AOS.init());
</script>

<template>
    <NavBar />
    <router-view></router-view>
    <div class="section"><About /></div>
    <div class="section"><Experience /></div>
    <div class="section"><Portfolio /></div>
    <div class="section"><Skills /></div>
    <Footer />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;800&family=Roboto+Slab:wght@300;400;800&display=swap');
body {
    font-family: 'Raleway', 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana,
        sans-serif;
    font-weight: 500;
    font-size: 15px;
    margin: 0;
}

#app {
    max-width: 1000px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.section {
    margin-bottom: 10px;
}
</style>

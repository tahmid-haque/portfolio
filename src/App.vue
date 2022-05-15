<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
    <NavBar />
    <router-view></router-view>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;800&family=Roboto+Slab:wght@300;400;800&display=swap');
body {
    font-family: 'Raleway', 'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana,
        sans-serif;
    font-weight: 500;
    max-width: 1000px;
    padding: 0 20px;
    margin: 0 auto;
}
</style>

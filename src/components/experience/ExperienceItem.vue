<script setup lang="ts">
import { computed } from '@vue/reactivity';
import type { Experience } from './Experience.vue';
const { index } = defineProps<{ experience: Experience; index: number }>();
const fadeSelector = computed(
    () => 'js--fadeIn' + (index % 2 ? 'Right' : 'Left')
);
</script>

<template>
    <div class="timeline-item">
        <div class="timeline-bullet"></div>
        <div :class="`timeline-content ${fadeSelector}`">
            <div class="header">
                <div class="logo">
                    <img
                        :src="`/assets/images/logos/${experience.logo}`"
                        alt="Experience logo"
                    />
                </div>
                <div class="position-info">
                    <div class="company">{{ experience.organization }}</div>
                    <div class="position-title bold">
                        {{ experience.position }}
                    </div>
                    <div class="position-date">{{ experience.date }}</div>
                </div>
            </div>
            <ul class="body">
                <li v-for="bullet in experience.info">
                    <span> {{ bullet }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
@import './experience.scss';
</style>

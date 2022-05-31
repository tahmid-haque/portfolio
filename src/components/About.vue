<script setup lang="ts">
import Heading from './Heading.vue';
</script>

<template>
    <div id="about">
        <img
            src="/assets/images/centered-profile.jpg"
            alt=""
            data-aos="zoom-in"
        />
        <div>
            <Heading subtle-text="About" emphasized-text="Me" />
            <div class="description" data-aos="zoom-out-up">
                Tahmid is a 4th year Computer Science student at UTSC pursuing a
                specialization in Software Engineering.​ His industry experience
                span over 12 months with 8 months of Developer experience at
                CaseWare International. In this role, Tahmid developed an
                upcoming web app using a Spring Boot-Angular-PostgreSQL stack
                and in addition, designed an AWS infrastructure for handling
                efficient data pushes. Following this experience, he began his
                work as a TA for upper year CS courses, helping his fellow
                students understand low-level concepts within software.​
                Throughout this journey, Tahmid developed an interest towards
                web development and subsequently, his favourite programming
                language is TypeScript. His ultimate goal is to make an impact
                in the tech industry as a software developer. Given free time,
                Tahmid enjoys spending it following trends in technology and
                exploring the beautiful coastline around the GTA. To see what
                he's up to next, reach out on LinkedIn!
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');

#about {
    display: flex;

    @media (max-width: 716px) {
        flex-direction: column;
        align-items: center;
    }
}

img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 0 20px 0 0;

    @media (max-width: 716px) {
        margin: 0 0 10px 0;
    }
}
</style>

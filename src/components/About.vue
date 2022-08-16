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
                I am a <strong>Computer Science</strong> student at the
                <strong>University of Toronto</strong> pursuing a specialization
                in <strong>Software Engineering</strong>. I’m now in my final
                year of study and have obtained
                <strong>1+ year(s) of experience</strong> interning across a few
                software companies. I’ve also helped build/teach a few courses
                surrounding low-level concepts in computer science. Currently, I
                have an interest in <strong>web development</strong> and
                <strong>cybersecurity</strong> but ultimately wish to make an
                impact within the industry! To learn more about me, see my
                resume or get in touch, keep scrolling!
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

.description {
    font-size: 18px;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import Heading from '../Heading.vue';
import ExperienceItem from './ExperienceItem.vue';

export type Experience = {
    logo: string;
    organization: string;
    position: string;
    date: string;
    info: string[];
};

const experiences: Experience[] = [
    {
        logo: 'amazon.jpg',
        organization: 'Amazon Inc.',
        position: 'Software Development Engineer Intern',
        date: 'May 2022 - Present',
        info: [
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec dictum',
            'Etiam consectetur mi eget risus ornare fermentum. Duis congue ipsum sem, eu fermentum nisi congue.',
            'Fusce scelerisque nec velit a hendrerit. Sed tincidunt dolor nec risus molestie egestas. Aenean sit.',
        ],
    },
    {
        logo: 'utoronto.jpg',
        organization: 'University of Toronto',
        position: 'Teaching Assistant',
        date: 'Summer 2021, Winter 2022',
        info: [
            'Assisted in the courses: CSCC69 Operating Systems & CSCB58 Computer Organization',
            'Held weekly tutorials, practicals and office hours to teach students about low-level concepts including concurrency, virtual memory, file systems and digital logic',
            'Created videos surrounding memory management to help students understand various virtual memory data structures',
            'Graded and provided feedback in regards to student assignments in a timely manner',
        ],
    },
    {
        logo: 'caseware.jpg',
        organization: 'CaseWare International Inc.',
        position: 'Software Developer',
        date: 'September 2020 - April 2021',
        info: [
            'Developed and released a web app using a TS (Angular) / Java (Spring) / PostgreSQL stack to deliver analytics data to accounting professionals in an intuitive format',
            'Designed and researched a distributed infrastructure to handle performant data pushes from desktop to cloud environments using AWS technologies',
            'Exemplified strong programming practices by creating solid documentation and integrating code coverage tools into development pipeline, increasing unit test coverage by 20%',
            'Collaborated with numerous teams across departments in an efficient manner, resulting in 30%+ more stories completed and positive UI reception among stakeholders',
        ],
    },
    {
        logo: 'svrobotics.jpg',
        organization: 'SV Robotics Academy',
        position: 'Curriculum Designer',
        date: 'July 2020 - August 2020',
        info: [
            'Worked in a team of 2 to design two web development courses for youth aged 12-18, creating course material surrounding HTML / CSS / JS',
            'Aided in the development of a Python course for elementary aged students by curating fun exercises that develop problem-solving abilities',
        ],
    },
    {
        logo: 'vouchr.jpg',
        organization: 'Vouchr Ltd.',
        position: 'QA Analyst',
        date: 'September 2019 - December 2019',
        info: [
            'Verified and tracked over 12+ bugfixes and feature implementations per day to aid in clearing large backlog of stories while following Agile workflows',
            'Coordinated across software teams in resolving major obstacles on Web, Android and iOS platforms to ensure a consistent experience when using the product',
            'Presented my findings in a clear and concise format using Pivotal Tracker, documents and spreadsheets, allowing for effortless access to product progress/status',
        ],
    },
    {
        logo: 'utoronto.jpg',
        organization: 'University of Toronto',
        position: 'HBSC - Computer Science',
        date: 'September 2018 - December 2022',
        info: [
            'Designated as a U of T Scholar',
            'Named on Dean’s List: Summer 2019, Fall 2020, Fall 2021',
            'cGPA: 3.81/4.00',
        ],
    },
];

// computes timeline shape using position deltas across experience items and bullets
const arrangeTimeline = () => {
    const ITEM_OFFSET = 20;
    const expComponents = document.querySelectorAll(
        '.timeline-item'
    ) as any as HTMLElement[];
    const isDisabled =
        (window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth) <= 716;
    for (let i = 1; i < expComponents.length; i++) {
        expComponents[i].style.marginTop = 'unset';
        if (isDisabled) continue;

        let directUpperExpPos = -Infinity;
        let lowerDelta = Infinity;

        // get upper circle position
        const directUpperBulletRect =
            expComponents[i - 1].children[0].getBoundingClientRect();
        const directUpperBulletPos =
            directUpperBulletRect.top + directUpperBulletRect.height;

        // get upper box position
        if (i > 1) {
            const directUpperExpRect =
                expComponents[i - 2].getBoundingClientRect();
            directUpperExpPos =
                directUpperExpRect.top + directUpperExpRect.height;
        }

        // get upper delta
        const currentExpPos = expComponents[i].getBoundingClientRect().top;
        const upperDelta =
            currentExpPos - Math.max(directUpperBulletPos, directUpperExpPos);

        // get lower delta
        const adjUpperExpRect = expComponents[i - 1].getBoundingClientRect();
        const adjUpperExpPos = adjUpperExpRect.top + adjUpperExpRect.height;
        const lowerItem =
            i < expComponents.length - 1
                ? expComponents[i + 1]
                : document.getElementById('portfolio');
        lowerDelta = lowerItem!.getBoundingClientRect().top - adjUpperExpPos;

        const finalDelta = -Math.min(upperDelta, lowerDelta) + ITEM_OFFSET;

        expComponents[i].style.marginTop = `${finalDelta}px`;
    }
};
onMounted(() => {
    arrangeTimeline();
    window.addEventListener('resize', arrangeTimeline);
});
</script>

<template>
    <div id="experience">
        <Heading subtle-text="My" emphasized-text="Experience" />
        <div id="exp-timeline">
            <ExperienceItem
                v-for="(experience, idx) of experiences"
                :experience="experience"
                :index="idx % 2"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './experience.scss';
</style>

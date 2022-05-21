import { createApp } from 'vue';
import App from './App.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';
import * as VueRouter from 'vue-router';

export const routes = [
    { path: '/', component: About, name: 'home' },
    { path: '/portfolio', component: Projects, name: 'portfolio' },
    { path: '/experience', component: Resume, name: 'experience' },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');

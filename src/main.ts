import { createApp } from 'vue';
import App from './App.vue';
import NotFound from './components/NotFound.vue';
import * as VueRouter from 'vue-router';

export const routes = [{ path: '/:pathMatch(.*)*', component: NotFound }];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');

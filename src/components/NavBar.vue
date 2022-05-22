<script setup lang="ts">
import { routes } from '../main';
import { useRoute, useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';
const options = routes.slice(0, -1);
const router = useRouter();
const active = computed(() => useRoute().name);
const onNavClick = (option: any) => router.push(option.path);
</script>

<template>
    <div id="navbar">
        <div id="name" class="roboto">
            Tahmid<span id="lastName">Haque</span>
        </div>
        <div id="options">
            <div
                v-for="(option, idx) in options"
                :class="{ active: option.name === active }"
                @click="onNavClick(option)"
                :key="idx"
            >
                {{ option.name }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    user-select: none;

    #name {
        font-size: 28px;
        font-weight: 300;

        #lastName {
            font-weight: 800;
        }
    }

    #options {
        display: flex;

        div {
            font-size: 18px;
            padding: 0 10px;
            height: 45px;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-transform: uppercase;
            display: flex;
            cursor: pointer;
            transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);

            &:before,
            &:after {
                border: 1px solid rgba(#000, 0);
                content: '';
                display: block;
                position: relative;
                transition: all 280ms ease-in-out;
                width: 0;
            }

            &:hover,
            &.active {
                &:before,
                &:after {
                    border-color: #ccc;
                    transition: width 350ms ease-in-out;
                    width: 100%;
                }
            }

            &.active {
                font-weight: 800;
                border-color: #000;
                &:before,
                &:after {
                    border-color: #000;
                    width: calc(100% + 20px);
                }
            }
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        #options {
            margin-top: 15px;
        }
    }
}
</style>

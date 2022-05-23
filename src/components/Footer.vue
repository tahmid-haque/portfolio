<script setup lang="ts"></script>

<template>
    <div id="footer">
        <div id="ownership">©2022 by Tahmid Haque</div>
        <div id="links">
            <a class="link" href="https://github.com/tahmid-haque">
                <div>
                    <i class="fa-brands fa-github"></i>
                    <div class="text">github.com/tahmid-haque</div>
                </div>
            </a>
            <a class="link" href="mailto:tahmid.haque@mail.utoronto.ca">
                <div>
                    <i class="fas fa-envelope"></i>
                    <div class="text">tahmid.haque@mail.utoronto.ca</div>
                </div>
            </a>
            <a class="link" href="https://linkedin.com/in/tahmid-h">
                <div>
                    <i class="fa-brands fa-linkedin"></i>
                    <div class="text">linkedin.com/in/tahmid-h</div>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('../assets/icons/css/fontawesome.min.css');
@import url('../assets/icons/css/brands.min.css');
@import url('../assets/icons/css/solid.min.css');

#footer {
    margin-top: 10px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
}

#ownership {
    font-size: 16px;
}

#links {
    display: flex;
    cursor: pointer;

    .link {
        color: inherit;
        text-decoration: inherit;

        i {
            font-size: 30px;
            margin: 5px;
        }
        &:after,
        .text {
            transition: all 350ms ease-in-out;
            width: 0;
            max-width: 0;
            white-space: nowrap;
            overflow: hidden;
        }

        &:after {
            border: 1px solid rgba(#000, 0);
            content: '';
            display: block;
            position: relative;
        }

        @media (hover: hover) {
            &:hover {
                &:after,
                .text {
                    border-color: #000;
                    width: 100%;
                    max-width: 300px;
                }
            }
        }

        & > div {
            display: flex;
            align-items: center;
        }
    }
}
</style>

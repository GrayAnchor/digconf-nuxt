<template>
    <header class="top-bar">
        <nav >
            <nuxt-link class="logo" to="/">
                <img src="~/static/img/DIG-logo.svg" alt="">
            </nuxt-link>
            <div class="page-links" >
                <nuxt-link to="/about">About</nuxt-link>
                <nuxt-link to="/schedule">Schedule</nuxt-link>
                <nuxt-link to="/speakers">Speakers</nuxt-link>
            </div>
            <nuxt-link class="btn" to="/register"><span>Register</span></nuxt-link>
        </nav>
    </header> 
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .top-bar {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 5rem;
        padding-bottom: 5rem;
        @include screen(md) {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }
        nav {
            max-width: $maxWLg;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include screen(md){
                flex-direction: column;
                align-items: start;
            }
            .logo {
                flex-shrink: 0;
                @include screen(sm) {
                    width: 10rem;
                    margin-bottom: 3rem;
                }
            }
            .page-links {
                display: flex;
                font-size: $fontBase;
                color: $offWhite;
                text-transform: uppercase;
                @include screen (md) {
                    margin-left: auto;
                }
                @include screen(sm) {
                    width: 100%;
                    justify-content: space-between;
                }
                a {
                    margin-right: 5.5rem;
                    &:hover {
                    background: linear-gradient(90deg, #4D2E90 0%, #EC297B 60%, #EE4747 75%, #F05A28 95%);
                    color: orange;
                    transition-property: color;
                    transition-duration: 200ms;
                    -webkit-text-fill-color: transparent;
                    -webkit-background-clip: text;
                    }
                    &:last-child {
                    margin-right: 0;
                    }
                    @include screen(lg) {
                        margin-right: 4rem;
                    }
                    @include screen(sm) {
                        margin-right: 0;
                    }
                }
                
            }
            .btn {
                font-size: $fontLg;
                font-weight: bold;
                color: $offWhite;
                text-transform: uppercase;
                padding-top: 2rem;
                padding-bottom: 2rem;
                padding-left: 5.5rem;
                padding-right: 5.5rem;
                background: linear-gradient(137deg, #30439F 0%, rgba(3,107,172,1) 60%, #00B9D2 100%);
                border-radius: 4rem;
                position: relative;
                span {
                    position: relative;
                }
                &::before {
                    content: '';
                    position: absolute;
                    z-index: 0;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: linear-gradient(90deg, #4D2E90 0%, #EC297B 60%, #EE4747 75%, #F05A28 95%);
                    border-radius: 4rem;
                    opacity: 0;
                    transition-property: opacity;
                    transition-duration: 200ms;
                }
                &:hover::before {
                    opacity: 1;
                    transition-property: opacity;
                    transition-duration: 200ms;
                }
                @include screen (md) {
                    position: absolute;
                    top: 2.5rem;
                    right: 2rem;
                    font-size: $fontSm;
                    padding-top: .5rem;
                    padding-bottom: .5rem;
                    padding-left: 3rem;
                    padding-right: 3rem;
                }
            }
        }
    }
</style>
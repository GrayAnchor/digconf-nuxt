<template>
    <footer class="footer" >
        <div class="footer-content">
            <nuxt-link class="logo-footer" to="/">
                <img src="~/static/img/logo-footer.svg" alt="">
            </nuxt-link>
            <div class="social">
                <h2>Connect and Share</h2>
                <div class="icons">
                    <a href="#fb" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.717" height="26.884" viewBox="0 0 13.717 26.884">
                        <g id="Facebook" transform="translate(-1183.245 -2094.444)">
                            <path id="Path_1" data-name="Path 1" d="M1187.35,2109.351l-4.028.065-.077-4.759,4.027-.065-.061-3.765a6.206,6.206,0,0,1,1.6-4.657,6.065,6.065,0,0,1,4.419-1.72,25.815,25.815,0,0,1,3.664.151l.069,4.237-2.511.04a2.433,2.433,0,0,0-1.925.659,2.68,2.68,0,0,0-.391,1.68l.053,3.295,4.446-.072-.55,4.769-3.818.062.194,11.977-4.916.08Z" />
                        </g>
                        </svg>
                    </a>
                    <a href="#twitter" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28.726" height="23.34" viewBox="0 0 28.726 23.34">
                        <g id="Twitter" transform="translate(-1222.84 -2096.279)">
                            <path id="Path_2" data-name="Path 2" d="M1248.648,2102.844a16.649,16.649,0,0,1-1.962,7.8,16.288,16.288,0,0,1-14.813,8.976,16.343,16.343,0,0,1-9.033-2.637q.617.057,1.4.056a11.683,11.683,0,0,0,7.351-2.524,5.48,5.48,0,0,1-3.451-1.151,5.848,5.848,0,0,1-2.048-2.889,10.594,10.594,0,0,0,1.066.056,7.425,7.425,0,0,0,1.571-.169,5.939,5.939,0,0,1-3.367-2.075,5.651,5.651,0,0,1-1.345-3.7v-.112a5.538,5.538,0,0,0,2.636.785,6.534,6.534,0,0,1-1.908-2.132,5.724,5.724,0,0,1,.112-5.779,16.481,16.481,0,0,0,12.12,6.172,8.171,8.171,0,0,1-.113-1.347,5.941,5.941,0,0,1,2.918-5.106,5.7,5.7,0,0,1,2.917-.785,5.619,5.619,0,0,1,2.385.5,6.645,6.645,0,0,1,1.935,1.347,12.012,12.012,0,0,0,3.76-1.4,5.846,5.846,0,0,1-2.581,3.254,12.643,12.643,0,0,0,3.366-.954,12.938,12.938,0,0,1-2.973,3.086A3.394,3.394,0,0,1,1248.648,2102.844Z" />
                        </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 7.7rem;
        padding-bottom: 7.7rem;
        &-content {
            max-width: $maxWLg;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo-footer {
                flex-shrink: 0;
            }
            .social {
                display: flex;
                flex-direction: column;
                color: white;
                h2 {
                    font-weight: bold;
                    letter-spacing: 0.075em;
                    text-transform: uppercase;
                    margin-bottom: 3rem;
                }
                .icons {
                    display: flex;
                    align-items: center;
                    margin-left: auto;
                    a.icon {
                        margin-right: 2rem;
                        fill: currentColor;
                        &:hover {
                            color: $orange;
                            transition-property: color;
                            transition-duration: 200ms;
                        }
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
            }

        }
    }
</style>
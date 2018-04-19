<template>
    <v-footer height="auto">
        <v-card flat tile class="lighten-1 white--text text-xs-center blue-grey darken-4" style="width: 100%">
            <v-card-text class="contact">
                <div class="github">
                    <v-btn icon class="mx-3 white--text" @click="window.location.href='https://github.com/ningge123'">
                        <v-icon size="24px">fab fa-github</v-icon>
                    </v-btn>
                </div>

                <div class="qq">
                    <v-btn icon class="mx-3 white--text">
                        <v-icon size="24px">fab fa-qq</v-icon>
                    </v-btn>
                    <div class="qq-qr-code">
                        <img src="/images/qq.JPG" alt="cocoyo QQ" width="160">
                    </div>
                </div>

                <div class="wechat">
                    <v-btn icon class="mx-3 white--text">
                        <v-icon size="24px">fab fa-weixin</v-icon>
                    </v-btn>
                    <div class="wechat-qr-code">
                        <img src="/images/weixin.JPG" alt="cocoyo 微信" width="160">
                    </div>
                </div>
            </v-card-text>
            <v-card-text class="white--text pt-0">
                一个快乐的极客
            </v-card-text>
            <v-card-text class="white--text">
                &copy;2018 — <strong>cocoyo . All rights reserved. 粤ICP备17015096号</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .footer .contact .qq:hover .qq-qr-code{
        display: block !important;
    }

    .footer .contact .wechat:hover .wechat-qr-code{
        display: block !important;
    }
    .qq, .wechat{
        position: relative;
    }
    .qq-qr-code, .wechat-qr-code {
        display: none !important;
        position: absolute;
        bottom: 100%;
        right: 50%;
        -webkit-transform: translate(50%,-10px);
        transform: translate(50%,-10px);
        -webkit-box-shadow: 0 4px 6px rgba(0,0,0,.46);
        box-shadow: 0 4px 6px rgba(0,0,0,.46);
    }

    .footer .contact div{
        display: inline-block;
    }
</style>
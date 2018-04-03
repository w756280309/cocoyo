<template>
    <v-app>
        <v-toolbar style="height: 64px;">
            <v-container class="nav-container">
                <router-link to="/">
                    <img src="/images/logo.png" alt="logo">
                </router-link>
                <div class="right">
                    <router-link to="/login">
                        <v-btn class="white--text" color="indigo" >登陆</v-btn>
                    </router-link>

                    <v-btn depressed class="white--text" color="pink">注册</v-btn>
                </div>
            </v-container>

        </v-toolbar>
        <v-content class="main-content">
            <router-view></router-view>
        </v-content>
        <v-footer height="auto">
            <v-card flat tile class="indigo lighten-1 white--text text-xs-center">
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
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </v-card-text>
                <v-card-text class="white--text">
                    &copy;2018 — <strong>cocoyo . All rights reserved. 粤ICP备17015096号</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

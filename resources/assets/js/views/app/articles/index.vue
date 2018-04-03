<template>
    <v-container id="article">
        <v-layout row wrap>
            <v-flex md4 v-for="i in 6" :key="`4${i}`" class="px-2 py-2">
                <router-link to="/login">
                    <v-card class="article-list">
                        <v-card-media
                                class="white--text"
                                height="200px"
                                src="https://image.cocoyo.xin/cover/201801/25/f75e7f9489cd69d1625e5326665f247b.jpg"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline">laravel-passport的使用(二)</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-media>
                        <v-card-title>
                            <p class="grey--text text-sm-left" style="width:100%">
                                <span>Sat, Jan 6, 2018 10:30 PM</span>
                                <span style="float:right;margin-left: 10px;"><v-icon size="10px">fas fa-eye</v-icon>&nbsp;&nbsp;100</span>
                                <span style="float:right;"><v-icon size="10px">fas fa-user</v-icon>&nbsp;&nbsp;cocoyo</span>
                            </p>
                        </v-card-title>
                        <div class="extra content">
                            Laravel 中文文档，由社区用户翻译和维护，将会保持一直更新
                        </div>
                    </v-card>
                </router-link>

            </v-flex>
        </v-layout>
        <div class="text-xs-center" style="padding-top: 10px;">
            <v-pagination :length="4" v-model="page" prev-icon="fas fa-chevron-left" next-icon="fas fa-chevron-right" style="font-size: 10px;" circle></v-pagination>
        </div>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                page: 1
            }
        }
    }
</script>

<style scoped>
</style>
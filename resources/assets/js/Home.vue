<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<style>
    html,body{
        width: 100%;
        height: 100%;
        background: #f0f0f0;
        overflow: hidden;
    }
    .app-main{
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <v-container>
        <v-layout row>
            <v-flex md4 v-for="i in 3" :key="`4${i}`" class="px-2">
                <article class="pannel">
                    <img src="https://image.cocoyo.xin/cover/201801/25/f75e7f9489cd69d1625e5326665f247b.jpg" alt="">
                    <div class="pannel-body">
                        <p class="gray">Thu, Jan 25, 2018 7:15 PM</p>
                        <a href="https://www.cocoyo.xin/the-use-of-browsersync" title="Browsersync的使用">
                            <p class="bold">Browsersync的使用</p></a>
                        <div class="person"><div>
                            <i class="iconfont icon-icon-test7" style="font-size: 29px;"></i>
                        </div>
                            <div>
                                <p>Browsersync的使用</p>
                                <p>
                                    <i class="ion-person"></i>
                                    &nbsp;&nbsp;cocoyo&nbsp;&nbsp;&nbsp;
                                    <i class="ion-ios-eye"></i>&nbsp;&nbsp;223
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
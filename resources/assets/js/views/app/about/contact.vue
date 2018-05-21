<template>
    <v-content class="main-content base_content">
        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex md4 offset-md4>
                    <Card style="text-align: center">
                        <Alert type="warning" style="line-height:28px;margin-bottom: 30px;">
                            添加请说明来意,可以交换友链,谢谢!
                            <img title=":wink:" alt=":wink:" class="emoji" src="/images/wink.png" align="absmiddle">
                        </Alert>
                        <img src="/images/weixin.jpg" width="250" style="border: 2px solid #e4e4e4;border-radius: 4px;margin-bottom: 18px;">
                    </Card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>
    .emoji{
        width: 1.4em;
        height: 1.4em;
        display: inline-block;
        margin-bottom: 0;
        margin-top: -5px;
        margin-left: 5px;
    }
</style>
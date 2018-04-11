<template>
    <div>
        <v-alert outline  color="error" :value="true" v-model="is_original" style="margin-bottom: 24px; border-radius: 4px;">
            由 {{ name }} 创作，采用
            <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">知识共享 署名-非商业性使用 4.0 国际 许可协议</a>进行许可。
            转载请注明出处.
        </v-alert>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                default() {
                    return ''
                },
                type: String
            },
            is_original: {
                default() {
                    return false
                },
                type: Boolean,
            },
        },
    }
</script>

<style scoped>

</style>
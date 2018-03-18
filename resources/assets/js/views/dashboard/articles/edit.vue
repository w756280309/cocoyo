<template>
    <article-form :form="form"></article-form>
</template>

<script>
    import ArticleForm from './form'
    export default {
        components: {
            ArticleForm
        },
        data() {
            return {
                form: undefined,
            }
        },
        created() {
            this.$http.get('articles/' + this.$route.params.id + '/edit')
                .then((response) => {
                    this.form = response.data
                    this.form.tags = this.form.tags.map(function (item) {
                        return item.id;
                    })
                })
        }
    }
</script>

<style scoped>
</style>
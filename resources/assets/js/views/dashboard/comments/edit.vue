<template>
    <div>
        <Row>
            <Col :span="24">
            <Card>
                <Form :model="form" label-position="right" :label-width="100">
                    <markdown-editor :configs="config" ref="markdownEditor" v-model="form.content_raw"></markdown-editor>

                    <FormItem style="text-align:center">
                        <Button type="success" @click="onSubmit('form')">编辑评论</Button>
                    </FormItem>
                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import markdownEditor from 'vue-simplemde/src/markdown-editor'

    export default {
        components: {
            markdownEditor
        },
        data() {
            return {
                form: {},
                simplemdeMark: {},
                config:{
                    toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
                },
            }
        },
        created() {
            this.$http.get('comments/' + this.$route.params.id + '/edit').then((response) => {
                this.form = response.data;
            })
        },
        mounted () {
            this.simplemdeMark = this.$refs.markdownEditor.simplemde
        },
        methods: {
            onSubmit(name) {
                if (this.form.content_raw) {
                    this.$http.put('comments/' + this.$route.params.id, this.form).then((response) => {
                        this.$Notice.success({
                            title: '这是一个消息提示',
                            desc: '编辑评论成功'
                        });
                        this.$router.push('/comments')
                    });
                } else {
                    this.$Message.error('评论内容不能为空!');
                }
            }
        }
    }
</script>

<style scoped>
    @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
</style>
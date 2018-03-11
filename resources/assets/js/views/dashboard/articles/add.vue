<template>
    <div>
        <Row>
            <Form :model="form" ref="form" :rules="ruleValidate" label-position="right" :label-width="50">
                <Col span="15">
                    <Card>
                        <FormItem label="标题" prop="title">
                            <Input icon="android-list" v-model="form.title"/>
                        </FormItem>
                        <FormItem label="内容" prop="content">
                            <markdown-editor :configs="config" ref="markdownEditor" v-model="form.content"></markdown-editor>
                        </FormItem>
                    </Card>
                </Col>
                <Col span="9" style="padding-left: 10px">
                    <Card>
                        <p slot="title">
                            <Icon type="paper-airplane"></Icon>
                            选项
                        </p>
                        <FormItem label="分类" prop="category_id">
                            <Select v-model="form.category_id">
                                <Option v-for="(category,key) in categories" :value="category.id" :key="key">{{ category.name }}</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="标签" prop="title">
                            <Select v-model="form.tags" multiple>
                                <Option v-for="tag in tags" :value="tag.id" :key="tag.id">{{ tag.tag }}</Option>
                            </Select>
                        </FormItem>
                    </Card>
                </Col>
            </Form>
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
                form: {
                    tags: []
                },
                ruleValidate: {},
                simplemdeMark: {},
                config:{
                    toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
                },
                categories: {},
                tags: {}
            }
        },
        mounted () {
            this.simplemdeMark = this.$refs.markdownEditor.simplemde
        },
        created() {
            Promise.all([this.$http.get('categories?type=all'), this.$http.get('tags?type=all')]).then((response) => {
                this.categories = response[0].data;
                this.tags = response[1].data
            })
        }
    }
</script>

<style scoped>
    @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
</style>
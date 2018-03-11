<template>
    <div>
        <Row>
            <Col :span="24">
            <Card>
                <Form :model="form" ref="form" :rules="ruleValidate" label-position="right" :label-width="100">
                    <FormItem label="标签" prop="tag">
                        <Input v-model="form.tag" size="large" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="描述" prop="meta_description">
                        <Input v-model="form.meta_description" size="large" placeholder="Enter something..." type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
                    </FormItem>

                    <FormItem>
                        <Button type="success" @click="onSubmit('form')" long>添加标签</Button>
                    </FormItem>
                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {},
                ruleValidate: {
                    tag: [
                        {required: true, message: '标签不能为空'}
                    ],
                    meta_description: [
                        {required: true, message: '标签描述不能为空'}
                    ]
                }
            }
        },
        methods: {
            onSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$http.post('tags', this.form).then((response) => {
                            this.$Notice.success({
                                title: '这是一个消息提示',
                                desc: '添加标签成功'
                            });
                            this.$router.push('/tags')
                        });
                    } else {
                        this.$Message.error('表单信息不完善!');
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
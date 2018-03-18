<template>
    <div>
        <Row>
            <Col :span="24">
            <Card>
                <Form :model="form" ref="form" :rules="ruleValidate" label-position="right" :label-width="100">
                    <FormItem label="链接名" prop="name">
                        <Input v-model="form.name" size="large" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem label="链 接" prop="link">
                        <Input v-model="form.link" size="large" placeholder="Enter something..."></Input>
                    </FormItem>

                    <Row>
                        <Col :span="12">
                            <FormItem label="logo" prop="meta_description">
                                <image-cover action="upload/image" :image="form.image" @successUpload="handleImageSuccess"></image-cover>
                            </FormItem>
                        </Col>
                    </Row>

                    <FormItem label="是否开启" prop="status">
                        <i-switch v-model="form.status" size="large" :true-value="1" :false-value="0">
                            <span slot="open">是</span>
                            <span slot="close">否</span>
                        </i-switch>
                    </FormItem>

                    <FormItem>
                        <Button type="success" @click="onSubmit('form')" long>编辑</Button>
                    </FormItem>
                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import ImageCover from '@/components/ImageCover'

    export default {
        components: {
            ImageCover
        },
        data() {
            return {
                form: {},
                ruleValidate: {
                    name: [
                        {required: true, message: '标签不能为空'}
                    ],
                    link: [
                        {required: true, message: '标签描述不能为空'}
                    ],
                    image: [
                        {required: true, message: '请上传logo'}
                    ]
                }
            }
        },
        created() {
            this.$http.get('links/' + this.$route.params.id + '/edit').then((response) => {
                this.form = response.data;
            })
        },
        methods: {
            onSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$http.put('links/' + this.$route.params.id, this.form).then((response) => {
                            this.$Notice.success({
                                title: '这是一个消息提示',
                                desc: '编辑友链成功'
                            });
                            this.$router.push('/links')
                        });
                    } else {
                        this.$Message.error('表单信息不完善!');
                    }
                })
            },
            handleImageSuccess(response) {
                this.form.image = response.relative_url
            }
        }
    }
</script>

<style scoped>

</style>
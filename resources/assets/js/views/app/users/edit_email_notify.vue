<template>
    <div>
        <h2><Icon type="gear-b"></Icon> Email 通知设置</h2>
        <hr>
        <Form :model="form" :label-width="150">
            <FormItem label="开启邮件通知？">
                <v-switch v-model="form.email_notify_enabled"  color="orange"></v-switch>
            </FormItem>
            <Button :loading="loading" style="color: #fff;background-color: #1abc9c;border-color: #1abc9c;"  @click="handleSubmit">
                <span v-if="!loading">应用修改</span>
                <span v-else>Loading...</span>
            </Button>
        </Form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email_notify_enabled: true,
                },
                loading: false
            }
        },
        created() {
            this.form.email_notify_enabled = this.$store.state.user.userinfo.email_notify_enabled == 'yes' ? true : false
        },
        methods: {
            handleSubmit() {
                this.loading = true
                this.$http.put('users/' + this.$route.params.name + '/email_notify_enabled', this.form).then((response) => {
                    this.$Message.success('修改成功')
                    var email_notify_enabled = this.form.email_notify_enabled ? 'yes' : 'no'
                    this.$store.commit('modifyEmailNotify', email_notify_enabled);
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>
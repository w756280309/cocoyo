<template>
    <div>
        <form-navbar page_name="创建文章" menu="文章列表" back="/articles"></form-navbar>
        <div class="list_box">
            <div class="list_box_content">
                <div class="list_box_big">
                    <div class="box_body">
                        <el-row>
                            <el-col>
                                <article-form></article-form>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormNavbar from '@/components/dashboard/form/navbar'
    import ArticleForm from './form'

    export default {
        components: {
            FormNavbar,
            ArticleForm
        },
    }
</script>

<style scoped>

</style>
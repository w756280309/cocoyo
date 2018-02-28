<template>
    <div class="mu-paper">
        <body-header :name="name"></body-header>
        <div class="body">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>用户数</span>
                            <span class="label label-success pull-right">全部</span>
                        </div>
                        <div class="text item">
                            <h1><icon name="users"></icon><span>{{ statistics.users }}</span></h1>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>文章数</span>
                            <span class="label label-success pull-right">全部</span>
                        </div>
                        <div class="text item">
                            <h1><icon name="book"></icon><span>{{ statistics.articles }}</span></h1>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>访问数</span>
                            <span class="label label-success pull-right">全部</span>
                        </div>
                        <div class="text item">
                            <h1><icon name="eye"></icon><span>{{ statistics.visitors }}</span></h1>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>评论数</span>
                            <span class="label label-success pull-right">全部</span>
                        </div>
                        <div class="text item">
                            <h1><icon name="comments"></icon><span>{{ statistics.comments }}</span></h1>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import  bodyHeader from '@/components/dashboard/body/header'

    export default {
        components : {
            bodyHeader,
        },
        data() {
            return {
                name : '控制面板',
                statistics: {},
            }
        },
        created() {
            this.$http.get('statistics').then((response) => {
                this.statistics = response.data
            })
        }
    }
</script>

<style scoped>
    .box-card .text span{
        margin-left:10px;
    }

</style>
<template>
    <div class="mu-paper">
        <body-header :name="name" :action_add="action_add" add_to_url="/category/create"></body-header>
        <div class="body">
            <el-table
                    :data="tableData"
                    highlight-current-row
                    v-loading="loading"
                    style="width: 100%">
                <el-table-column property="id" label="id"></el-table-column>
                <el-table-column property="name" label="分类名"></el-table-column>
                <el-table-column property="path" label="路径"></el-table-column>
                <el-table-column property="description" label="描述"></el-table-column>
                <el-table-column property="created_at" label="创建时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <router-link :to="'category/' + scope.row.id + '/edit'">
                            <el-button type="primary" icon="el-icon-edit" round></el-button>
                        </router-link>
                        <el-button type="danger" @click="handleDelete(scope.row.id)" icon="el-icon-delete" round></el-button>
                    </template>
                </el-table-column>
            </el-table>

            <div class="table-pagination">
                <el-pagination
                        layout="prev, pager, next"
                        @current-change="handleCurrentChange"
                        :total="meta.total"
                        :page-size="meta.per_page"
                        :current-page="meta.current_page">
                </el-pagination>
            </div>

        </div>
    </div>
</template>

<script>
    import  bodyHeader from '@/components/dashboard/body/header'
    export default {
        components : {
            bodyHeader
        },
        data() {
            return {
                loading: true,
                name : '分类列表',
                action_add: true,
                tableData: [],
                meta: {
                    current_page: 1,
                    total : 0,
                    per_page: 10
                }
            }
        },
        created() {
            this.loadData()
        },
        methods: {
            loadData() {
                this.loading = true
                var url = 'category';

                if (this.meta.current_page > 1) {
                    let page = ''
                    if (url.indexOf('?') != -1) {
                        page = '&page='
                    } else {
                        page = '?page='
                    }
                    url = url + page + this.meta.current_page
                    this.$router.push(page + this.meta.current_page)
                }

                this.$http.get(url).then((response) => {
                    this.loading = false
                    this.tableData = response.data;
                    this.meta = response.meta
                })
            },
            handleCurrentChange(val) {
                this.meta.current_page = val
                this.loadData()
            },
            handleDelete(id) {
                this.$confirm('您确定要删除该分类吗？请三思!', '是否删除?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'error',
                    center: true
                }).then(() => {
                    this.$http.delete('category/' + id ).then((response) => {
                        this.$notify({
                            title: 'success',
                            message: '删除成功',
                            type: 'success'
                        })
                        this.loadData()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="mu-paper">
        <body-header :name="name" :action_add="action_add" add_to_url="/links/create"></body-header>
        <div class="body">
            <el-table
                    :data="tableData"
                    highlight-current-row
                    v-loading="loading"
                    style="width: 100%">
                <el-table-column property="id" label="id"></el-table-column>
                <el-table-column property="image" label="图片">
                    <template slot-scope="scope">
                        <img :src="scope.row.image" class="avatar" alt="avatar">
                    </template>
                </el-table-column>
                <el-table-column property="name" label="名字"></el-table-column>
                <el-table-column property="link" label="链接"></el-table-column>
                <el-table-column property="status" label="是否启用">
                    <template slot-scope="scope">
                        <i :class="scope.row.status == 1 ? 'el-icon-success' : 'el-icon-error'"
                           :style="scope.row.status == 1 ?  statusEnable : statusDisable"
                           @click="handleStatus(scope.row.id)">
                        </i>
                    </template>
                </el-table-column>
                <el-table-column property="created_at" label="创建时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <router-link :to="'links/' + scope.row.id + '/edit'">
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
                name : '友链列表',
                action_add: true,
                tableData: [],
                meta: {
                    current_page: 1,
                    total : 0,
                    per_page: 10
                },
                statusEnable: {
                    color: '#409EFF',
                    cursor: 'pointer'
                },
                statusDisable: {
                    color: '#F56C6C',
                    cursor: 'pointer'
                }
            }
        },
        created() {
            this.loadData()
        },
        methods: {
            loadData() {
                this.loading = true
                var url = 'links';

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
                this.$confirm('您确定要删除该友链吗？请三思!', '是否删除?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'error',
                    center: true
                }).then(() => {
                    this.$http.delete('links/' + id ).then((response) => {
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
            handleStatus(id) {
                this.$confirm('该动作可能会影响一些数据，请三思!', '改变该状态?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$http.put('links/' + id + '/status').then((response) => {
                        this.$notify({
                            title: 'success',
                            message: '状态修改成功',
                            type: 'success'
                        })
                        this.loadData()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="mu-paper">
        <body-header :name="name"></body-header>
        <div class="body">
            <el-table
                    :data="tableData"
                    highlight-current-row
                    v-loading="loading"
                    style="width: 100%">
                <el-table-column property="id" label="id"></el-table-column>
                <el-table-column label="头像">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" class="avatar" alt="avatar">
                    </template>
                </el-table-column>
                <el-table-column property="name" label="用户名"></el-table-column>
                <el-table-column property="email" label="邮箱"></el-table-column>
                <el-table-column label="是否启用">
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
                        <router-link :to="'users/' + scope.row.id + '/edit'">
                            <el-button type="primary" icon="el-icon-edit" round></el-button>
                        </router-link>
                        <el-button type="danger" icon="el-icon-delete" round></el-button>
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
    import  bodyHeader from '../../../components/dashboard/body/header'
    export default {
        components : {
            bodyHeader
        },
       data() {
            return {
                loading: true,
                name : '用户列表',
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
                var url = 'users';

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
            handleStatus(id) {
                this.$confirm('该动作可能会影响一些数据，请三思!', '改变该状态?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    this.$http.put('users/' + id + '/status').then((response) => {
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
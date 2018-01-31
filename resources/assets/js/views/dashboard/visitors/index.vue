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
                <el-table-column property="article" label="文章标题"></el-table-column>
                <el-table-column property="ip" label="IP"></el-table-column>
                <el-table-column property="clicks" label="点击次数"></el-table-column>
                <el-table-column property="created_at" label="创建时间"></el-table-column>
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
                loading: false,
                name : '访问列表',
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
                var url = 'visitors';

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
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <Row>
            <Col :span="24">
                <Table :data="tableData" :columns="tableColumns" stripe></Table>
                <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                        <Page :total="100" :current="1"></Page>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData: [],
                meta: {
                    current_page: 1,
                    total : 0,
                    per_page: 10
                },
                tableColumns: [
                    {
                        title: 'id',
                        key: 'id'
                    },
                    {
                        title: '头像',
                        key: 'avatar',
                        render: (h, params) => {

                        }
                    },
                    {
                        title: '用户名',
                        key: 'name'
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                    },
                    {
                        title: '状态',
                        key: 'status',
                        render: (h, params) => {
                            return h('div', 'Almost' + params.row.time + 'days');
                        }
                    },
                    {
                        title: '创建时间',
                        key: 'created_at',
                        render: (h, params) => {
                            return h('div', this.formatDate(this.tableData1[params.index].update));
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
                ]
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
        }
    }
</script>
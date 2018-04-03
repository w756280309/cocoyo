<template>
    <div>
        <Row>
            <Col :span="24">
                <Card>
                    <p slot="title" style="height:100%;text-align: right;">
                        <router-link to="/links/add">
                            <Button type="primary" icon="android-add-circle">添加友链</Button>
                        </router-link>
                    </p>
                    <Table :loading="loading" :data="tableData" :columns="tableColumns" stripe></Table>
                    <div style="margin: 10px;overflow: hidden">
                        <div style="float: right;">
                            <Page :total="meta.total" :current="meta.current_page" @on-change="handleCurrentChange"></Page>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
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
                        title: 'logo',
                        key: 'image',
                        render: (h, params) => {
                            return h('Avatar', {
                                props: {
                                    src: params.row.image
                                }
                            })
                        }
                    },
                    {
                        title: '名字',
                        key: 'name',
                    },
                    {
                        title: '链接',
                        key: 'link'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        render: (h, params) => {
                            return h('span', [
                                h('Icon', {
                                    props: {
                                        type: 'record'
                                    },
                                    style: {
                                        color: params.row.status == 1 ? 'rgb(142, 180, 203)' : 'color: rgb(191, 83, 41)'
                                    },
                                })
                            ])
                        }
                    },
                    {
                        title: '创建时间',
                        key: 'created_at'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                    h('Button', {
                                        props: {
                                            type: 'primary',
                                            shape: 'circle',
                                            icon: params.row.status == 1 ? 'load-c' : 'ios-circle-outline'
                                        },
                                        style: {
                                            marginRight: '5px'
                                        },
                                        on: {
                                            click: () => {
                                                this.handleStatus(params.row.id, params.row.status)
                                            }
                                        }
                                    }),
                                h('router-link',{
                                    props: {
                                        to: '/links/' + params.row.id + '/edit'
                                    },
                                }, [
                                    h('Button', {
                                        props: {
                                            type: 'success',
                                            shape: 'circle',
                                            icon: 'edit'
                                        },
                                        style: {
                                            marginRight: '5px'
                                        },
                                    }),
                                ]),

                                h('Button', {
                                    props: {
                                        type: 'error',
                                        shape: 'circle',
                                        icon: 'android-delete'
                                    },
                                    on: {
                                        click: () => {
                                            this.handleDelete(params)
                                        }
                                    }
                                }),
                            ])
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
            handleDelete(data) {
                this.$Modal.confirm({
                    title: '是否删除该友链?',
                    content: '该友链会永久删除，请三思!',
                    okText: '是,删除它!',
                    cancelText: '取消',
                    loading: true,
                    onOk: () => {
                        this.$http.delete('links/' + data.row.id).then((response) => {
                            this.$Modal.remove();
                            this.loadData()
                            this.$Message.success('删除成功');
                        })
                    }
                });
            },
            handleStatus(id, status) {
                let tip = '是否启用该友链?';

                if (status == 1) {
                    tip = '是否禁用该友链?'
                }

                this.$Modal.confirm({
                    title: tip,
                    content: '该动作可能会影响一些数据，请三思!',
                    okText: '是,改变它!',
                    cancelText: '取消',
                    loading: true,
                    onOk: () => {
                        this.$http.put('links/' + id +'/status').then((response) => {
                            this.$Modal.remove();
                            this.loadData()
                            this.$Message.success('修改成功');
                        })
                    }
                });
            }
        }
    }
</script>
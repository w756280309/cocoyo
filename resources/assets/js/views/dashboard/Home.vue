<template>
    <div>
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="ibox">
                    <div class="ibox">
                        <div class="ibox-title">
                            <span class="label label-success pull-right">全部</span>
                            <h5 class="no-margins">用户数</h5>
                        </div>
                        <div class="ibox-content">
                            <h1 class="no-margins"><i class="ion-md-people"></i>123</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="ibox">
                    <div class="ibox">
                        <div class="ibox-title">
                            <span class="label label-success pull-right">全部</span>
                            <h5 class="no-margins">访问数</h5>
                        </div>
                        <div class="ibox-content">
                            <h1 class="no-margins"><i class="ion-ios-eye"></i>123</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="ibox">
                    <div class="ibox">
                        <div class="ibox-title">
                            <span class="label label-success pull-right">全部</span>
                            <h5 class="no-margins">文章数</h5>
                        </div>
                        <div class="ibox-content">
                            <h1 class="no-margins"><i class="ion-ios-book"></i>123</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="ibox">
                    <div class="ibox">
                        <div class="ibox-title">
                            <span class="label label-success pull-right">全部</span>
                            <h5 class="no-margins">评论数</h5>
                        </div>
                        <div class="ibox-content">
                            <h1 class="no-margins"><i class="ion-ios-chatbubbles"></i>123</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    h1 {
        font-size: 30px;
        font-weight: normal;
    }
    h5 {
        font-size: 14px;
    }
    h1 i {
        font-size: 35px;
        margin-right: 12px;
    }
    .label {
        padding: .3em .6em;
    }
    .no-margins {
        margin: 0 !important;
    }
</style>
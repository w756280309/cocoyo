<template>
    <div class="top_info clearfix">
        <div class="item_notify">
            <div class="notify_wrap">
                <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="bottom">
                    <i class="el-icon-bell"></i>
                </el-tooltip>
            </div>
        </div>
        <div class="user_info">
            <el-dropdown>
                <img data-v-5552f324="" class="img-responsive img-circle" src="https://image.cocoyo.xin/IMG_0347.PNG">
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>


<script>
    export default {}
</script>

<style scoped>
    .top_info {
        position: absolute;
        right: 20px;
        top: 20px;
        z-index: 111;
    }
   .top_info .item_notify {
        width: 24px;
        height: 24px;
        margin-right: 20px;
        margin-top: 4px;
        cursor: pointer;
        float: left;
    }
    .notify_wrap .mu-icon-button {
        left: -10px;
        top: -12px;
    }
    .top_info .user_info {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        float: left;
        position: relative;
        top: -5px;
        left: 0;
    }
</style>
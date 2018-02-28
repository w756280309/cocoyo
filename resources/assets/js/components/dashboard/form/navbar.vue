<template>
    <div class="switch_top">
        <div class="switch_return">
            <div class="back-but">
                <router-link :to="back">
                    <button class="mu-icon-button" type="button" style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
                        <div class="">
                            <div class="mu-ripple-wrapper"></div>
                            <i class="el-icon-back"></i>
                        </div>
                    </button>
                </router-link>

                <span class="page-name">{{ menu }}</span>
            </div>
        </div>
        <h2>
            <div class="team_name_show">{{ page_name }}</div>
        </h2>
        <div class="team_invite"></div>
    </div>
</template>

<script>
    export default {
        props: ['back', 'page_name', 'menu']
    }
</script>

<style scoped>

</style>
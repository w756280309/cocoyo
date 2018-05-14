<template>
    <div class="section__3bS4">
        <router-link :to="'/users/' + name">
            <img :src="avatar" class="avatar img-circle" style="width: 40px; height: 40px; background: rgb(255, 255, 255); padding: 3px; border: 1px solid rgb(197, 197, 197);">
        </router-link>
        <router-link :to="'/users/' + name">
            {{ name }}
        </router-link>
        •
        关注了你
        <span class="meta">
            • {{ created_diff }}
        </span>
    </div>
</template>

<script>
    export default {
        props: ['avatar', 'name', 'created_diff']
    }
</script>

<style scoped>
    .meta, .operate {
        color: #a9a7a7;
        font-size: 12px;
    }
</style>
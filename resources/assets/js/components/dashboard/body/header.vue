<template>
    <div class="header">
        <div class="header-name">
            <span class="name-span">{{ name }}</span>
        </div>
        <div class="header-type-switch" v-if="action_add">
            <router-link :to="add_to_url">
                <button class="mu-float-button project-add-but" type="button" style="user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;">
                    <div>
                        <div class="mu-ripple-wrapper"></div>
                        <div class="mu-float-button-wrapper">
                            <i class="ion-md-add material-icons"></i>
                        </div>
                    </div>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                default : ''
            },
            action_add: {
                default : false
            },
            add_to_url: {
                default: ''
            }
        },
    }
</script>

<style scoped>

</style>
<template>
   <div class="main" :class="{'main-hide-text': shrink}">
      <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
         <shrinkable-menu
                 :shrink="shrink"
                 @on-change="handleSubmenuChange"
                 :before-push="beforePush"
                 :open-names="openedSubmenuArr"
                 :menu-list="menuList">
            <div slot="top" class="logo-con">
               <img v-show="!shrink"  src="/images/logo.png" key="max-logo" />
            </div>
         </shrinkable-menu>
      </div>
      <div class="main-header-icon" :style="{paddingLeft: shrink?'60px':'200px'}">
         <div class="main-header">
            <div class="navicon-con">
               <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
                  <Icon type="navicon" size="32"></Icon>
               </Button>
            </div>
            <div class="header-middle-con">
               <div class="main-breadcrumb">
                  <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
               </div>
            </div>
            <div class="header-avator-con">
               <message-tip v-model="mesCount" style="margin-left:41%"></message-tip>

               <div class="user-dropdown-menu-con">
                  <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                     <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                        <a href="javascript:void(0)">
                           <span class="main-user-name">{{ name }}</span>
                           <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                           <DropdownItem name="ownSpace">个人中心</DropdownItem>
                           <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                        </DropdownMenu>
                     </Dropdown>
                     <Avatar :src="avatarPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                  </Row>
               </div>
            </div>
         </div>
         <div class="tags-con">
            <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
         </div>
      </div>
      <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
         <div class="single-page">
            <keep-alive :include="cachePage">
               <router-view></router-view>
            </keep-alive>
         </div>
      </div>
   </div>
</template>

<script>
    import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue';
    import tagsPageOpened from './main-components/tags-page-opened.vue';
    import breadcrumbNav from './main-components/breadcrumb-nav.vue';
    import fullScreen from './main-components/fullscreen.vue';
    import messageTip from './main-components/message-tip.vue';
    import Cookies from 'js-cookie';
    import util from '@/libs/util.js'

    export default {
        components: {
            shrinkableMenu,
            tagsPageOpened,
            breadcrumbNav,
            fullScreen,
            messageTip,
        },
        data () {
            return {
                shrink: false,
                openedSubmenuArr: this.$store.state.app.openedSubmenuArr
            };
        },
        computed: {
            name() {
                return this.$store.state.user.nickname ? this.$store.state.user.nickname : this.$store.state.user.name;
            },
            menuList () {
                return this.$store.state.app.menuList;
            },
            pageTagsList () {
                return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
            },
            currentPath () {
                return this.$store.state.app.currentPath; // 当前面包屑数组
            },
            avatarPath () {
                console.log(this.$store.state.user.avatar)
                return this.$store.state.user.avatar;
            },
            cachePage () {
                return this.$store.state.app.cachePage;
            },
            mesCount () {
                return this.$store.state.app.messageCount;
            }
        },
        methods: {
            init () {
                let pathArr = util.setCurrentPath(this, this.$route.name);
                this.$store.commit('updateMenulist');
                if (pathArr.length >= 2) {
                    this.$store.commit('addOpenSubmenu', pathArr[1].name);
                }
                let messageCount = 3;
                this.messageCount = messageCount.toString();
                this.checkTag(this.$route.name);
                this.$store.commit('setMessageCount', 3);
            },
            toggleClick () {
                this.shrink = !this.shrink;
            },
            handleClickUserDropdown (name) {
                if (name === 'ownSpace') {
                    this.$router.push({
                        name: 'users_edit',
                        params: {id : this.$store.state.user.id}
                    });
                } else if (name === 'loginout') {
                    // 退出登录
                    this.$store.commit('logout', this);
                    this.$store.commit('clearOpenedSubmenu');
                    window.location.href = '/';
                }
            },
            checkTag (name) {
                let openpageHasTag = this.pageTagsList.some(item => {
                    if (item.name === name) {
                        return true;
                    }
                });
                if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
                    util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
                }
            },
            handleSubmenuChange (val) {
                // console.log(val)
            },
            beforePush (name) {
                // if (name === 'accesstest_index') {
                //     return false;
                // } else {
                //     return true;
                // }
                return true;
            }
        },
        watch: {
            '$route' (to) {
                this.$store.commit('setCurrentPageName', to.name);
                let pathArr = util.setCurrentPath(this, to.name);
                if (pathArr.length > 2) {
                    this.$store.commit('addOpenSubmenu', pathArr[1].name);
                }
                this.checkTag(to.name);
                localStorage.currentPageName = to.name;
            }
        },
        mounted () {
            this.init();
        },
        created () {
            // 显示打开的页面的列表
            this.$store.commit('setOpenedList');
        }
    }
</script>

<style scoped>

</style>
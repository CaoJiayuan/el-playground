<template>
  <layout-main>
    <div class="app-menu" slot="header">
      <div class="profile">
        <h2>A vue admin</h2>
      </div>
      <el-menu mode="horizontal">
        <el-submenu index="2">
          <template slot="title">个人中心</template>
          <el-menu-item index="2-1">修改密码</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4">订单管理</el-menu-item>
      </el-menu>
      <div class="theme" style="right: 20px;position: absolute;top: 13px;">
        <el-button circle style="background: red" ></el-button>
        <el-button circle style="background: grey" ></el-button>
        <el-button size="mini" @click="logout">退出</el-button>
      </div>
    </div>
    <app-aside slot="aside"></app-aside>
  </layout-main>
</template>

<script>
  import LayoutMain from "../components/layout/Main.vue";
  import themeable from "../mixins/themeable";
  import AppAside from "../components/layout/aside/index";
  import UserApi from "./auth/UserApi";

  const mapMutations = Vuex.mapMutations

  export default {
    mixins    : [themeable],
    data() {
      return {};
    },
    components: {
      AppAside,
      LayoutMain
    },
    methods   : {
      ...mapMutations({
        toggleNav: 'toggleCollapse'
      }),
      logout(){
        UserApi.logout().then(r => this.$router.push('/login'))
      }
    },
    mounted() {

    },
    created() {
    },

  };
</script>
<style lang="sass">
  @import "../assets/style/vars"

  .app-menu
    position: relative
    .el-menu
      margin-left: $aside-width
      border: none
    .profile
      float: left
      height: 100%
      line-height: 61px
      padding: 0 20px

  .app-aside
    .el-menu
      border: none
</style>

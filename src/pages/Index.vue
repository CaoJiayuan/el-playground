<template>
  <layout-main>
    <div class="app-menu" slot="header" :style="{backgroundColor: theme.back, color: theme.front}">
      <div class="profile" :style="{backgroundColor: theme.back, color: theme.front, width: nav.collapse ? '24px' : '200px'}">
        <h2>A vue admin</h2>
      </div>
      <div @click="toggleNav" class="toggle-nav" :style="{backgroundColor: theme.back, color: theme.front}"><i class="fa fa-bars"></i></div>
      <app-menu :back-color="theme.back" :front-color="theme.front"></app-menu>
    </div>
    <app-aside slot="aside" :back-color="theme.back" :front-color="theme.front"></app-aside>
  </layout-main>
</template>

<script>
  import LayoutMain from "../components/layout/Main.vue";
  import themeable from "../mixins/themeable";
  import AppAside from "../components/layout/aside/index";
  import UserApi from "./auth/UserApi";
  import AppMenu from "../components/layout/menu/index";

  const mapMutations = Vuex.mapMutations
  const mapGetters = Vuex.mapGetters

  export default {
    mixins    : [themeable],
    data() {
      return {};
    },
    components: {
      AppMenu,
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
    computed:{
      ...mapGetters({
        nav : 'nav'
      })
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
    transition: $color-transition
    .el-menu
      border: none
    .profile
      float: left
      height: 61px
      line-height: 61px
      padding: 0 20px
      transition: width $duration ease-in-out, $color-transition
    .toggle-nav
      float: left
      width: 64px
      height: 61px
      line-height: 61px
      text-align: center
      font-size: 24px
      cursor: pointer
      transition: $color-transition
  .app-aside
    transition: $color-transition
    .el-menu
      border: none
</style>

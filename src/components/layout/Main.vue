<template>
<div id="content" :class="fixedAside ? 'fixed-aside': '' " :style="{backgroundColor: theme.back}">
  <slot name="header">
  </slot>

  <el-container>
    <slot name="aside"></slot>
    <div id="main" :style="{marginLeft : nav.collapse ? '64px': '240px', backgroundColor: theme.back}">
      <app-tabs></app-tabs>
      <el-main class="app-main">
        <div class="app-notification">
          <el-alert
            :title="notification.title"
            :type="notification.type" v-for="(notification, index) in notifications" :key="index">
          </el-alert>
        </div>
        <router-view />
        <div class="placeholder-bar"></div>
        <el-footer class="app-footer" height="46px">
          Vue admin &copy; {{new Date().getFullYear()}}
        </el-footer>
      </el-main>
    </div>
  </el-container>
  <app-theme></app-theme>
</div>
</template>

<script>
  import themeable from '../../mixins/themeable'
  import AppTabs from './content/tabs/index'
  import AppTheme from "../theme/index";
  const mapGetters = Vuex.mapGetters

  export default {
    mixins:[themeable],
    props: {
      fixedAside: {
        type: Boolean,
        default: true
      }
    },
    name: 'layout-main',
    computed:{
      ...mapGetters({
        nav: 'nav'
      })
    },
    data() {
      return {
        usingTabs: true,
        notifications : [
          {
            type: 'info',
            title : '消息提示'
          },
          {
            type: 'error',
            title : '错误提示'
          },
          {
            type: 'success',
            title : '成功提示'
          },
          {
            type: 'warning',
            title : '警告提示'
          },
        ]
      };
    },
    components: {
      AppTheme,
      AppTabs},
    methods   : {},
    mounted() {

    },
    created() {

    },

  };
</script>

<style lang="sass">
.placeholder-bar
  height: 46px
  width: 100%
</style>

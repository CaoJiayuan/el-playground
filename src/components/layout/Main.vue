<template>
<div id="content" :class="fixedAside ? 'fixed-aside': '' ">
  <slot name="header">
  </slot>

  <el-container>
    <slot name="aside"></slot>
    <div id="main" :style="{marginLeft : nav.collapse ? '64px': '240px'}">
      <app-tabs></app-tabs>
      <el-main class="app-main">
        <router-view />
        <div class="placeholder-bar"></div>
        <el-footer class="app-footer" height="46px">
          Vue admin &copy; {{new Date().getFullYear()}}
        </el-footer>
      </el-main>
    </div>
  </el-container>
</div>
</template>

<script>
  import themeable from '../../mixins/themeable'
  import AppTabs from './content/tabs/index'
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
        usingTabs: true
      };
    },
    components: {AppTabs},
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

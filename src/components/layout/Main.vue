<template>
<div id="content" :class="fixedAside ? 'fixed-aside': '' ">
  <slot name="header">
  </slot>

  <el-container>
    <slot name="aside"></slot>
    <div id="main">
      <app-tabs></app-tabs>
      <el-main class="app-main">
        <router-view />
        <div class="placeholder-bar"></div>
      </el-main>
    </div>
  </el-container>
</div>
</template>

<script>
  import themeable from '../../mixins/themeable'
  import AppTabs from './content/tabs/index'
  export default {
    mixins:[themeable],
    props: {
      fixedAside: {
        type: Boolean,
        default: true
      }
    },
    name: 'layout-main',
    data() {
      return {};
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

<template>
<div v-theme="{ name: theme.name, type: 'content' }" id="content" :class="fixedAside ? 'fixed-aside': '' ">
  <slot name="header">
  </slot>

  <el-container>
    <slot name="aside"></slot>
    <el-main id="main" v-theme="{ name: theme.name, type: 'main' }">
      <router-view />
    </el-main>
  </el-container>
</div>
</template>

<script>
  import themeable from '../../mixins/themeable'
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
    components: {},
    methods   : {},
    mounted() {

    },
    created() {

    },

  };
</script>

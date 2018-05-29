<template>
<el-button v-theme="{name: 'red', type : 'button'}">test</el-button>
</template>

<script>
  import theme from '../directives/theme';
  export default {
    data () {
      return {}
    },
    components: {},
    methods: {},
    mounted () {

    },
    created () {

    },
    directives:{
      theme
    }
  }
</script>

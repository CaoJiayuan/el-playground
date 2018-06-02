<template>
  <el-input :type="type" v-model="bind"></el-input>
</template>

<script>
  import valueable from '../../../mixins/valueable'
  export default {
    props     : {
      type: {
        type: String,
        default: () => 'text'
      },
      value: [Number, String]
    },
    data() {
      return {};
    },
    mixins: [valueable],
    components: {},
    methods   : {},
    mounted() {

    },
    created() {

    },

  };
</script>

<template>
<div>
  <h1>Dashboard</h1>
  <el-button type="primary" @click="showForm">Form</el-button>
</div>
</template>

<script>
  import Form from '../../components/form'
  export default {
    data() {
      return {
        post: {}
      };
    },
    components: {},
    methods   : {
      showForm(){
        const h = this.$createElement;
        this.$msgbox({
          title: 'Form',
          message: h(Form, {
            props: {
              fields: [
                {
                  label: 'Title',
                  type: 'input',
                  id: 'title'
                }
              ]
            },
            value : this.post
          }),
          style: {
            width: '25%'
          }
        })
      }
    },
    mounted() {

    },
    created() {

    },

  };
</script>

<template>
<div>
  <h1>Dashboard</h1>
  <el-date-picker v-model="time" type="datetime"></el-date-picker>
  <el-button type="primary" @click="form = true">Form</el-button>
  <el-dialog :visible.sync="form" title="Form example">
    <app-form labelWidth="80" v-model="post" :fields="fields" :columns="2"></app-form>
    <el-button @click="save">Ok</el-button>
  </el-dialog>
</div>
</template>

<script>
  import AppForm from '../../components/form'
  export default {
    data() {
      return {
        post: {

        },
        fields: [
          {
            label: 'Title',
            type: 'input.textarea',
            id: 'title',
            props: {
              clearable: true
            },
            span: 2
          },
          {
            label: 'Summary',
            type: 'input',
            id: 'summary',
            span: 2,
            props: {
              clearable: true,
            }
          },
          {
            label: 'Datetime',
            type: 'input',
            id: 'created_at',
          },
          {
            label: 'Datetime range',
            type: 'input',
            id: 'time_range'
          },
          {
            label: 'Time',
            type: 'input',
            id: 'time'
          },
        ],
        form: false,
        time: ''
      };
    },
    components: {AppForm},
    methods   : {
      showForm(){

      },
      save(){
        const h = this.$createElement
        console.log(this.post)
        this.$msgbox({
          title: 'POST',
          message: h('p',{
            style:{
              wordWrap: 'break-all'
            }
          }, JSON.stringify(this.post))
        })
      }
    },
    mounted() {

    },
    created() {

    },

  };
</script>

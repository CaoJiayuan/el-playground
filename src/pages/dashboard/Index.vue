<template>
<div>
  <h1>Dashboard</h1>
  <el-date-picker v-model="time" type="datetime"></el-date-picker>
  <el-button type="primary" @click="form = true">Form</el-button>
  <el-dialog :visible.sync="form" title="Form example">
    <app-form labelWidth="120" v-model="post" :fields="fields" :columns="1"></app-form>
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
          title: 'A random title',
          summary: 'Summary line1\nLine 2',
          created_at: new Date(),
          time_range: ['2018-06-25 12:12:12', '2018-06-30 12:12:12']
        },
        fields: [
          {
            label: 'Title',
            type: 'input',
            id: 'title',
            props: {
              clearable: true
            }
          },
          {
            label: 'Summary',
            type: 'input.textarea',
            id: 'summary',
          },
          {
            label: 'Datetime',
            type: 'input.datetime',
            id: 'created_at',
            default: new Date(),
          },
          {
            label: 'Datetime range',
            type: 'input.datetimerange',
            id: 'time_range'
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

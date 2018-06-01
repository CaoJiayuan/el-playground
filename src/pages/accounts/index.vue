<template>
  <div>
    <data-table api-url="/admin/api/users" :headers="headers"></data-table>
  </div>
</template>

<script>
  import DataTable from '../../components/datatable/index'

  export default {
    data () {
      return {
        headers: [
          {
            id: 'id',
            label: 'ID',
            width: 100
          },
          {
            id: 'nickname',
            label: '昵称',
            render: this.renderName
          },
          {
            id: 'created_at',
            label: '创建时间',
          }
        ]
      }
    },
    components: {DataTable},
    methods: {
      renderName (name, row, h) {
        return h('el-popover', {
          props:{
            trigger: 'hover'
          }
        }, [h('p', {
          slot: 'reference'
        }, name), row['mobile']])
      }
    },
    mounted () {

    },
    created () {

    },

  }
</script>

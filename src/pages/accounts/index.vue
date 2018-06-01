<template>
  <div>
    <data-table selectable api-url="/admin/api/users" :headers="headers" :actions="actions"></data-table>
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
            width: 100,
            fixed: true
          },
          {
            id: 'nickname',
            label: '昵称',
            render: this.renderName,
            minWidth:100,
            click: 'clickName'
          },
          {
            id: 'created_at',
            label: '创建时间',
            minWidth:250
          }
        ],
        actions:[
          {
            icon: 'el-icon-edit',
            type: 'primary',
            label: '编辑'
          }
        ]
      }
    },
    components: {DataTable},
    methods: {
      renderName (name, row, h) {
        return h('p', name)
      },
      clickName(name) {
        console.log(name)
      }
    },
    mounted () {

    },
    created () {

    },

  }
</script>

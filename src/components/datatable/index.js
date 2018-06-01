import pagination from '../../mixins/pagination'

require('./table.sass')
export default {
  name: 'data-table',
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  },
  mixins: [pagination],
  data () {
    return {
      findingDepth: 0
    }
  },
  render (h) {
    const table = h('el-table', {
      props: {
        data: this.paginator.data,
        stripe: true,
      },
      style: {
        width: '100%'
      }
    }, [this.renderRows(h)])

    const pager = h('el-pagination', {
      props: {
        background: true,
        pageSize: this.pageSize,
        total: this.paginator.total,
        layout: 'prev, pager, next,->,sizes,total'
      },
      on: {
        'current-change': page => this.page(page),
        'size-change': size => {
          this.pageSize = size
          this.refresh()
        }
      }
    })

    return h('div', {
      class: 'app-table'
    }, [table, pager])
  },
  methods: {
    renderRows (h) {
      return this.headers.map(header => {
        return h('el-table-column', {
          props: {
            prop: header.id,
            label: header.label,
            align: header.align || 'center',
            width: header.width
          },
          scopedSlots: {
            default: props => this.callRenderCellFunction(header.render, props.row, header.id, h)
          },
        })
      })
    },
    callRenderCellFunction (render, row, id, createElement) {

      let defaultRender = (r, i, h) => h('div', row[id])

      if (render === undefined) {
        return defaultRender(row, id, createElement)
      } else {
        let parentMethod = this.getParentMethod(render)
        if (parentMethod) {
          return parentMethod.call(this.$parent, row[id], row, createElement)
        } else {
          return defaultRender(row, id, createElement)
        }
      }
    },
    callParentMethod (method, ...args) {
      let m = this.getParentMethod(method)
      if (m) {
        return m.call(this.$parent, ...args)
      }
      return m
    },
    getParentMethod (method) {
      if (method === undefined) {
        return false
      }
      if (typeof method === 'function') {
        return method
      }

      return this.findParentMethod(method, this.$parent, 4)
    },
    findParentMethod (method, $parent, deep = 3) {
      if ($parent === undefined) {
        this.findingDepth = 0
        return false
      }
      let m = $parent[method]
      if (m && typeof m === 'function') {
        this.findingDepth = 0
        return m
      } else {
        if (this.findingDepth >= deep) {
          this.findingDepth = 0
          return false
        }
        this.findingDepth++
        return this.findParentMethod(method, $parent.$parent)
      }
    }
  },

  mounted () {
    this.load({})
  }
}

import pagination from '../../mixins/pagination'

require('./table.sass')
export default {
  name: 'data-table',
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    },
    selectable: Boolean,
    value: {
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
        stripe: true
      },
      on: {
        'selection-change': selections => this.$emit('input', selections)
      },
      style: {
        width: '100%'
      }
    }, [this.renderRows(h)])

    let pager = h('el-pagination', {
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
      let row = this.headers.map(header => {
        return h('el-table-column', {
          props: {
            prop: header.id,
            label: header.label,
            align: header.align || 'center',
            width: header.width,
            fixed: header.fixed,
            minWidth: header.minWidth,

          },
          scopedSlots: {
            default: props => this.callRenderCellFunction(header, props.row, header.id, h)
          },
        })
      })
      if (this.actions.length > 0) {
        row.push(this.renderActions(h))
      }
      if (this.selectable) {
        row.unshift(h('el-table-column', {
          props: {
            type: 'selection',
            width: 32
          }
        }))
      }

      return row
    },
    renderActions (h) {
      return h('el-table-column', {
        props: {
          minWidth: 180,
          label: '操作',
          align: 'center',
          fixed: 'right'
        },
        scopedSlots: {
          default: props => {
            let row = props.row
            let acts = this.actions.map(action => {
              return this.showAction(action, row) ? h('el-button', {
                props: {
                  size: action.size || 'mini',
                  type: action.type,
                  circle: action.circle,
                  icon: action.icon,
                  plain: action.plain,
                },
                on: {
                  click: e => {
                    this.callParentMethod(action.click, row)
                  }
                }
              }, action.label) : h('div')
            })
            return acts
          }
        },
      })
    },
    showAction (action, row) {
      if (action.show !== undefined) {
        return this.callParentMethod(action.show, row)
      }

      return true
    },
    callRenderCellFunction (header, row, id, createElement) {
      let on = header.click ? {
        click: e => {
          this.callParentMethod(header.click, row[id], row, e)
        }
      } : {}
      let render = header.render
      let defaultRender = (r, i, h) => h('div', {
        on
      }, row[id])

      if (render === undefined) {
        return defaultRender(row, id, createElement)
      } else {
        let parentMethod = this.getParentMethod(render)
        if (parentMethod && typeof parentMethod === 'function') {
          let el = parentMethod.call(this.$parent, row[id], row, createElement)
          return createElement('div', {
            on
          }, [el])
        } else {
          return defaultRender(row, id, createElement)
        }
      }
    },
    callParentMethod (method, ...args) {
      let m = this.getParentMethod(method)
      if (m && typeof m === 'function') {
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
      if (typeof method === 'boolean') {
        return method
      }
      let findingDepth = 0

      return this.findParentMethod(method, this.$parent, 4, findingDepth)
    },
    findParentMethod (method, $parent, deep = 3, findingDepth = 0) {
      if ($parent === undefined) {
        findingDepth = 0
        return false
      }
      let m = $parent[method]
      if (m && typeof m === 'function') {
        findingDepth = 0
        return m
      } else {
        if (this.findingDepth >= deep) {
          findingDepth = 0
          return false
        }
        findingDepth++
        return this.findParentMethod(method, $parent.$parent, deep, findingDepth)
      }
    }
  },

  mounted () {
    this.load({})
  }
}

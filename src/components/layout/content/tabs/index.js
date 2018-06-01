require('./tab.sass')
const mapMutations = Vuex.mapMutations
const mapGetters = Vuex.mapGetters
const mapActions = Vuex.mapActions
export default {
  props:{
    asideWidth: {
      type:Number,
      default: () => 240
    }
  },
  name: 'app-tabs',
  data(){
    return {
      bodyWidth : document.body.clientWidth
    }
  },
  render (h) {
    let tabs = this.renderTabs(h)

    return h('div', {
      class: 'app-tabs',
      ref: 'content',
      style: {
        width: this.mainWidth + 'px'
      }
    }, tabs)
  },
  methods:{
    ...mapMutations({
      tab: 'activeTab',
    }),
    ...mapActions({
      close: 'closeTab',
    }),
    bind(){
      window.addEventListener('resize', this.onResize, true)
    },
    unbind(){
      window.removeEventListener('resize', this.onResize)
    },
    onResize(){
      this.bodyWidth = document.body.clientWidth
    },
    renderTabs(h){
      let tabs = []
      let length = this.tabs.length
      this.tabs.forEach(tab => {
        let close = length > 1 ? h('i', {
          class: 'close-tab el-icon-close',
          on: {
            click: e => {
              e.preventDefault()
              e.stopPropagation()
              this.close(tab).then(() => {
                if (tab.active) {
                  this.tabs.length > 0 && this.tab(this.tabs[0])
                  this.$router.go(-1)
                }
              })
            }
          }
        }) : undefined;

        let title = h('h4', tab.title)

        tabs.push(h('div', {
          class: ['tab-item', {
            'active': tab.active
          }],
          style: {
            width: ((this.mainWidth / length) - 2) + 'px'
          },
          on:{
            click: e => {
              e.preventDefault()
              e.stopPropagation()
              this.tab(tab)
              this.$router.push(tab.to)
            }
          }
        }, [title, close]))
      })
      return tabs;
    }
  },
  mounted () {
    this.bind();
  },
  computed: {
    ...mapGetters({
      tabs: 'tabs'
    }),
    mainWidth () {
      return this.bodyWidth - this.asideWidth
    }
  },
  beforeDestroy(){
    this.unbind()
  }
}

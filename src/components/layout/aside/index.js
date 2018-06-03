import Api from './Api'

require('./aside.sass')

const mapGetters = Vuex.mapGetters
export default {
  name: 'app-aside',
  computed:{
    ...mapGetters({
      nav: 'nav'
    })
  },
  mounted(){
    Api.loadNav().then(nav => this.$store.dispatch('loadNav', nav))
  },
  render(h){
    const items = h('el-menu', {
      props: {
        router: true,
        defaultActive: this.$route.path,
        collapse: this.nav.collapse
      }
    }, this.renderItems(h))
    return h('el-aside', {
      class: 'app-aside',
      props: {
        width: '240px'
      }
    }, [items])
  },
  methods:{
    renderItems(h){
      return this.nav.items.map(item => {
        let icon;
        if (item.icon) {
          icon = h('i', {
            class: item.icon
          })
        }
        let title = h('span', {
          slot: 'title'
        }, item.display_name)
        return h('el-menu-item',{
          props: {
            index: item.path
          }
        }, [icon, title])
      })
    }
  }

}

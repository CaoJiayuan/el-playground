import Api from './Api'
import color from '../../../mixins/color';
import {COLLAPSE_KEY} from '../../../constants'

require('./aside.sass')

const mapGetters = Vuex.mapGetters
export default {
  name: 'app-aside',
  computed:{
    ...mapGetters({
      nav: 'nav'
    })
  },
  mixins :[color],
  mounted(){
    Api.loadNav().then(nav => this.$store.dispatch('loadNav', nav))
    this.$store.commit('toggleCollapse', {collapse: this.$storage.get(COLLAPSE_KEY, false)})
  },
  render(h){
    const items = h('el-menu', {
      props: {
        router: true,
        defaultActive: this.$route.path,
        collapse: this.nav.collapse,
        backgroundColor: this.backColor,
        textColor : this.frontColor,
        activeTextColor : this.accentColor
      }
    }, this.renderItems(h))
    return h('el-aside', {
      class: 'app-aside',
      props: {
        width: this.nav.collapse ? '64px' : '240px',
      },
      style:{
        backgroundColor: this.backColor
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

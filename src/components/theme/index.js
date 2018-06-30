import {arrayChunk} from '../../assets/js/utils'
import {THEME_KEY} from '../../constants'

require('./theme.sass')

const mapGetters = Vuex.mapGetters
const mapMutations = Vuex.mapMutations

export default {
  name : 'app-theme',
  computed:{
    ...mapGetters({
      themes: 'themes',
      theme: 'theme',
    })
  },
  methods:{
    ...mapMutations({
      changeTheme: 'changeTheme'
    })
  },
  mounted(){
    this.changeTheme(this.$storage.get(THEME_KEY, this.theme))
  },
  render(h){
    const button = h('el-button', {
      slot: 'reference',
      props: {
        circle: true
      },
      attrs : {
        id: 'app-theme'
      }
    }, [h('span', {
      class: 'core',
      style: {
        backgroundColor:this.theme.back
      }
    })]);
    const col = 4;

    const themes = arrayChunk(this.themes, col).map(row => {

      let ths = row.map(cell => {
        let btn = h('el-button', {
          props: {
            circle: true
          },
          style: {
            backgroundColor: cell.back
          },
          on: {
            click : e => this.changeTheme(cell)
          }
        })
        return h('el-col', {
          props: {
            span: 24 / col
          },
          style: {
            textAlign: 'center'
          }
        }, [btn])
      });

      return h('el-row', {
        style: {
          width: '100%'
        }
      }, ths)
    });

    const container = h('div', {
      class: 'app-theme-box'
    }, themes);

    return h('el-popover', {
      props: {
        trigger : 'click',
        placement: 'right'
      },
    },[container, button])
  }
}

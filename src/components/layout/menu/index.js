import color from '../../../mixins/color';

const mapGetters = Vuex.mapGetters;
export default {
  name    : 'app-menu',
  computed: {
    ...mapGetters({
      nav: 'nav'
    })
  },
  mixins  : [color],
  data() {
    return {
      menus: [
        {
          id: 'profile',
          label: '个人中心',
          children: [
            {

            }
          ]
        },
        {
          id: 'system',
          label: '系统管理',
        }
      ]
    };
  },
  render(h) {
    let items = this.menus.map(menu => h('el-menu-item', {
      props: {
        index: menu.id,
      }
    }, menu.label))


    return h('el-menu', {
      props: {
        mode: 'horizontal',
        backgroundColor: this.backColor,
        textColor : this.frontColor,
        activeTextColor : this.accentColor
      },
      style: {
        marginLeft: '64px'
      }
    }, items);
  }
};

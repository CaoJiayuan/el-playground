const mapGetters = Vuex.mapGetters;
const mapActions = Vuex.mapActions;

export default {
  computed:{
    ...mapGetters({
      theme: 'theme'
    })
  },
  methods:{
    ...mapActions({
      applyTheme: 'doChangeTheme'
    })
  }
}

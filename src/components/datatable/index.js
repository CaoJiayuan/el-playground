import pagination from '../../mixins/pagination'

export default {
  name: 'data-table',
  mixins: [pagination],


  render (h) {

  },

  mounted(){
    this.load({})
  }
}

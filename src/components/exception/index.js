require('./exception.sass');

export default {
  name : 'app-exception',
  props: {
    trace: {
      type   : Array,
      default: () => []
    }
  },
  mounted(){
  },
  render(h) {
    const traces = this.trace.map(t => h('li', t));

    let t = h('ul',{
      class : 'ex-trace'
    },  traces);

    return h('div', {
      class: 'app-exception'
    }, [t]);
  }
};

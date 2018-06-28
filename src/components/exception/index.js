require('./exception.sass');

export default {
  name : 'app-exception',
  props: {
    trace: {
      type   : Array,
      default: () => []
    },
    message: {
      type   : String,
      default: () => ''
    },
    file: {
      type   : String,
      default: () => ''
    },
    exception: {
      type   : String,
      default: () => undefined
    },
  },
  mounted(){
  },
  render(h) {
    const traces = this.trace.map(t => h('li', t));

    let t = traces.length > 0 ? h('ul',{
      class : 'ex-trace'
    },  traces) : h('div', {
      style:{
        textAlign: 'center',
        padding: '5px',
        color: 'gray'
      }
    }, 'No trace display (server may not in debug mode)');

    let title = h('h3', {} , this.message)
    let file = h('p', {
      style:{
        fontSize: '12px'
      }
    } , this.file)

    let msg = h('div', {
      class:'ex-msg'
    }, [title, file])

    let tip = h('div', {
      class:'ex-tip'
    }, this.exception ? this.exception : 'Server error')

    return h('div', {
      class: 'app-exception'
    }, [tip, msg, t, ]);
  }
};

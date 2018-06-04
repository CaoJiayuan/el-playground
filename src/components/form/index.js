import {arrayChunk} from '../../assets/js/utils';
import input from './fields/input';

export default {
  name    : 'app-form',
  props   : {
    value  : {
      type   : Object,
      default: () => {
        return {};
      }
    },
    fields : {
      type   : Array,
      default: () => []
    },
    columns: {
      type   : Number,
      default: () => 1
    },
    labelWidth: {
      type: [Number, String],
      default: () => 80
    }
  },
  computed: {
    post: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      }
    }
  },
  data() {
    return {
      types: {
        input
      },
      data: null
    };
  },
  render(h) {
    return h('el-form', {
      props: {
        labelWidth: `${this.labelWidth}px`
      }
    }, this.renderFields(h));
  },
  mounted() {

  },
  methods : {
    renderFields(h) {
      const chunks = arrayChunk(this.fields, this.columns);

      return chunks.map(row => {
        let columns = row.map(col => {

          let span = col.span || 1;

          return h('el-col', {
            props: {
              span: Math.ceil(24 / this.columns) * span
            }
          }, [this.renderCell(h, col.type, col)]);
        });
        return h('el-row', {}, columns);
      });
    },
    renderCell(h, type, field) {
      let com = this.types[type];
      if (com === undefined) {
        com = input;
      }
      let props = field.props || {};

      this.post[field.id] === undefined && (this.post[field.id] = field.default)

      let el = h(com, {
        props : {
          type : type ? type.split('.', 2)[1] : undefined,
          value: this.post[field.id]
        },
        on: {
          input: v => {
            this.post[field.id] = v;
          }
        },
        attrs: props
      });

      return h('el-form-item', {
        props: {
          label: field.label
        }
      }, [el]);
    }
  }
};

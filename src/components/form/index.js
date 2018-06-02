import {arrayChunk} from '../../assets/js/utils';
import input from './fields/TextInput.vue';
export default {
  name    : 'app-form',
  props   : {
    value  : {
      type: Object,
      default: () => {
        return {}
      }
    },
    fields : {
      type   : Array,
      default: () => []
    },
    columns: {
      type   : Number,
      default: () => 1
    }
  },
  computed: {
    post: {
      get() {
        return this.value;
      },
      set(v) {
        console.log(v)
        this.$emit('input', v);
      }
    }
  },
  data(){
    return {
      types: {
        input
      }
    }
  },
  render(h) {
    return h('el-form', {
      props: {
        labelWidth: '80px'
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

          return h('el-col', {
            props: {
              span: Math.ceil(24 / this.columns)
            }
          }, [this.renderCell(h, col.type, col)]);
        });
        return h('el-row', {}, columns);
      });
    },
    renderCell(h, type, field){
      let com = this.types[type];
      if (com === undefined){
        com = input;
      }
      let el = h(com, {
        props:{
          value: this.post[field.id],
          type: type ? type.split('.', 2)[1] : undefined
        },
        on:{
          input: v => {
            this.post[field.id] = v
          }
        }
      });

      return  h('el-form-item', {
        props: {
          label: field.label
        }
      }, [el]);
    }
  }
};

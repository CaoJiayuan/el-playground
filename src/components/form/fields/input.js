import {inArray} from '../../../assets/js/utils';

export default {
  name    : 'app-input',
  props   : {
    type : {
      type   : String,
      default: () => 'text'
    },
    value: [String, Array, Number, Object, Date]
  },
  data() {
    return {
      datetime  : new Date(),
      dateRanges: '',
    };
  },
  computed: {
    mergedProps() {
      return Object.assign(this.$attrs, {
        type : this.type,
        value: this.value
      });
    }
  },
  render(h) {
    if (this.inType(['time', 'timerange', 'daterange', 'datetimerange', 'date', 'datetime'])) {
      return this.renderTimeAndDateInputs(h);
    }

    return this.renderTextInputs(h);
  },
  methods : {
    renderTextInputs(h) {
      let props = this.mergedProps;
      return h('el-input', {
        props,
        on: {
          input: this.inputEvent
        }
      });
    },
    renderTimeAndDateInputs(h) {
      if (this.inType(['date', 'datetime'])) {
        return this.renderDateTime(h);
      } else if (this.inType(['daterange', 'datetimerange'])) {
        return this.renderDateTimeRange(h);
      }
    },
    renderTime(h) {

    },

    renderDateTime(h) {
      this.datetime = this.value;
      let props = this.mergedProps;

      props['valueFormat'] = 'yyyy-MM-dd HH:mm:ss';
      props = Object.assign(props, {
        value: this.datetime
      });

      return h('el-date-picker', {
        props,
        on: {
          input: v => {
            this.$emit('input', v);
            this.datetime = v;
            return v;
          }
        }
      });
    },

    renderDateTimeRange(h) {
      this.dateRanges = this.value;
      let props = this.mergedProps;
      props['valueFormat'] = 'yyyy-MM-dd HH:mm:ss';
      props = Object.assign(props, {
        value: this.dateRanges
      });

      return h('el-date-picker', {
        props,
        on: {
          input: v => {
            this.$emit('input', v);
            this.dateRanges = v;
            return v;
          }
        }
      });
    },

    inType(types) {
      return inArray(this.type, types);
    },


    inputEvent(v) {
      return this.$emit('input', v);
    },

  }
};

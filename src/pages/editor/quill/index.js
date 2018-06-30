import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import {fastRandom} from '../../../assets/js/utils'

require('./quill.sass')
export default {
  name: 'editor-quill',
  data(){
    return {
      id : 'quill-' + fastRandom()
    }
  },
  mounted(){
    new Quill(this.$refs.editor)
  },
  render(h){

    const editor  = h('div', {
      attrs:{
        id: this.id
      },
      ref : 'editor'
    });

    return h('div', {
      class: 'app-quill'
    },[editor])
  }
}

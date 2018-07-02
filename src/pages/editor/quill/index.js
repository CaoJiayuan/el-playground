import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import {fastRandom} from '../../../assets/js/utils'
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';

Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);

require('./quill.sass')
export default {
  name: 'editor-quill',
  data(){
    return {
      id : 'quill-' + fastRandom()
    }
  },
  mounted(){
    new Quill(this.$refs.editor,  {
      theme: 'snow',
      modules: {
        imageDrop: true,
        imageResize: []
      }
    })
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

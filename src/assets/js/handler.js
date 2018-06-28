import Exception from '../../components/exception';
import {fastRandom, getMaxZIndex, cover, uncover} from './utils'
const id = fastRandom()
const elId = `ex-${id}`

function Handler(exception) {
  this.vue = new Vue();
  this.exception = exception;
}

Handler.prototype.render = function () {
  cover();
  let box = document.getElementById(elId);
  let container;
  if (box === null)  {
    box = document.createElement('div');
    box.style.zIndex = getMaxZIndex() + 1
    box.setAttribute('class', 'exception-box');
    box.id = elId
    document.body.appendChild(box)
    let close = document.createElement('i');
    close.setAttribute('class', 'el-icon-close ex-close')
    close.addEventListener('click', this.close)
    box.appendChild(close);
    box.addEventListener('click' , e => e.stopPropagation())
  } else  {
    box.removeChild(box.getElementsByTagName('div')[0])
  }
  box.style.display = 'inline-block'
  container = document.createElement('div')

  const Component = Vue.extend(Exception)

  box.appendChild(container);

  let com = new Component().$mount(container)
  let trace = this.exception.trace || []
  if (trace.length === 0) {
    box.style.height = '100px'
  }
  com.$props.trace = trace
  com.$props.message = this.exception.message
  com.$props.file = this.exception.file || ''
  com.$props.exception = this.exception.exception
  document.body.addEventListener('click', this.clickOutSide)
};

Handler.prototype.close = function () {
  let box = document.getElementById(elId);
  if (box) {
    box.style.display = 'none'
  }
  uncover()

  document.body.removeEventListener('click', this.clickOutSide)
}

Handler.prototype.cover = function () {

}

Handler.prototype.clickOutSide = function (e) {
  let box = document.getElementById(elId);

  if (e.target !== box) {
    Handler.prototype.close()
  }
}

export default Handler;

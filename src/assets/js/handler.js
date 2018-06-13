import Exception from '../../components/exception';

function Handler(exception) {
  this.vue = new Vue();
  this.exception = exception;
}

Handler.prototype.render = function () {
  let box = document.createElement('div');
  box.setAttribute('class', 'exception-box');
  document.body.appendChild(box)
  const Component = Vue.extend(Exception)
  let container = document.createElement('div')

  box.appendChild(container);

  let com = new Component().$mount(container)
  com.$props.trace = this.exception.trace
  console.log(com)
};


export default Handler;

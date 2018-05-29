import {themes} from '../theme'

function appendClass (el, classes) {
  el.setAttribute('class', el.getAttribute('class') + ' ' + classes)
}




export default {
  bind:  (el, binding, vnode) => {
    let {type, name} = binding.value;
    let theme = themes[name].items[type]
    appendClass(el, theme.class)
    for (let i in theme.style) {
      el.style[i] = theme.style[i]
    }
    console.log( themes[name].items[type] )
  }
}


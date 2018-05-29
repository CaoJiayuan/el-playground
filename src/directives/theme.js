import {themes} from '../theme'

function appendClass (el, classes) {
  el.setAttribute('class', el.getAttribute('class') + ' ' + classes)
}

function getWanted (el, binding) {
  let name = ''
  if (binding.value !== undefined) {
    name = binding.value.name
  }
}


export default {
  bind:  (el, binding, vnode) => {
    console.log(el.type, binding)
    let {type, name} = binding.value;
    let theme = themes[name].items[type]
    appendClass(el, theme.class)
    for (let i in theme.style) {
      el.style[i] = theme.style[i]
    }
    console.log( themes[name].items[type] )
  }
}


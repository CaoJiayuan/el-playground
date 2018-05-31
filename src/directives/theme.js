import {themes} from '../theme';

function appendClass(el, classes) {
  el.setAttribute('class', el.getAttribute('class') + ' ' + classes);
}

function getWanted(el, binding) {
  let name = 'default', type = 'default';
  if (binding.value !== undefined) {
    name = binding.value.name;
    type = binding.value.type || el.type;
  } else {
    name = binding.expression;
  }
  let th = themes[name];
  if (th) {
    return th.items[type];
  }
  return false;
}


export default {
  bind: (el, binding, vnode) => {
    let theme = getWanted(el, binding);
    if (theme) {
      theme.class && appendClass(el, theme.class);
      for (let i in theme.style) {
        el.style[i] = theme.style[i];
      }
    }
  }
};


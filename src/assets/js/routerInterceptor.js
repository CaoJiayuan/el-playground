import store from '../../store'

const interceptor = (to, from, next) => {
  setTitle(to)
  setTab(to)
  next()
}

function setTitle (route) {
  let title = route.meta.title
  if (title) {
    document.title = title
  }
}

function setTab (route) {
  let title = route.meta.title
  let guest = route.meta.guest
  guest || store.dispatch('routeTab', {
    to: route.path,
    title: title
  })
}

export default interceptor

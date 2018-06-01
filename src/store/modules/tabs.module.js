import {Storage} from '../../assets/js/utils'
const storage = new Storage();
const state = {
  tabs: loadTabs()
}

const getters = {
  tabs: state => state.tabs
}
const mutations = {
  pushTab(state, tab){
    state.tabs.push(tab)
    storeTabs(state.tabs)
  },
  removeTab(state, tab) {
    state.tabs.splice(state.tabs.indexOf(tab) , 1)
    storeTabs(state.tabs)
  },
  activeTab(state, tab){
    state.tabs.forEach(t => t.active = false)
    tab.active = true
    storeTabs(state.tabs)
  }
}

const actions = {
  closeTab({commit, state}, tab) {
    commit('removeTab', tab)
  },
  routeTab({commit, state}, tab) {
    let filtered = state.tabs.filter(t => tab.to === t.to)
    if (filtered.length < 1) {
      tab.active = true
      commit('pushTab', tab)
      commit('activeTab', tab)
    } else {
      commit('activeTab', filtered[0])
    }
  }
}

function storeTabs (tabs) {
  storage.put('tabs', tabs)
}

function loadTabs () {
  return storage.get('tabs', [])
}


export default {
  state,
  getters,
  mutations,
  actions
}

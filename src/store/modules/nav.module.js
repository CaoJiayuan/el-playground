import {Storage} from '../../assets/js/utils'
import {COLLAPSE_KEY} from '../../constants'

const storage = new Storage();

const state = {
  nav: {
    items: [],
    collapse: false
  }
};


const getters = {
  nav: state => state.nav
};


const mutations = {
  toggleCollapse(state, {collapse}) {
    collapse = collapse === undefined ? !state.nav.collapse : collapse
    state.nav.collapse = collapse
    storage.put(COLLAPSE_KEY, state.nav.collapse)
  },
  setNavItems(state, nav){
    state.nav.items = nav
  }
};


const actions = {
  loadNav({commit}, nav){
    commit('setNavItems', nav)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

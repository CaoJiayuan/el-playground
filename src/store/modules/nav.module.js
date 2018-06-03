
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
  toggleCollapse(state) {
    state.nav.collapse = !state.nav.collapse
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

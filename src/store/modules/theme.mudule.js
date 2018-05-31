const state = {
  theme: {
    name: 'default'
  }
};


const getters = {
  theme: state => state.theme
};


const mutations = {
  changeTheme(state, theme) {
    state.theme = theme
  }
};


const actions = {
  doChangeTheme({commit}, theme) {
    commit('changeTheme', theme)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

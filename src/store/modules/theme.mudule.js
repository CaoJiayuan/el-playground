import {Storage} from '../../assets/js/utils'
import {THEME_KEY} from '../../constants'

const storage = new Storage();

const state = {
  theme: {
    back: '#925a5c',
    front: '#ffffff',
    accent : '#abdaff'
  },
  themes: [
    {
      back: '#9c4e4d',
      front: '#ffffff',
      accent : '#abdaff'
    },
    {
      back: '#545c64',
      front: '#fff',
      accent : '#abdaff'
    },
    {
      back: '#c8e9de',
      front: '#000000',
      accent : '#f6fcff'
    },
    {
      back: '#dae976',
      front: '#ffffff',
      accent : '#abdaff'
    },
  ]
};


const getters = {
  theme: state => state.theme,
  themes: state => state.themes
};


const mutations = {
  changeTheme(state, theme) {
    state.theme = theme
    storage.put(THEME_KEY, theme);
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

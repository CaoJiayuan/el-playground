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
      accent : '#d1bbd9'
    },
    {
      back: '#545c64',
      front: '#fff',
      accent : '#d1bbd9'
    },
    {
      back: '#9ae9ce',
      front: '#000000',
      accent : '#f6fcff'
    },
    {
      back: '#dae976',
      front: '#ffffff',
      accent : '#5e846c'
    },
    {
      back: '#deb3e9',
      front: '#ffe1f5',
      accent : '#83426e'
    },
    {
      back: '#e9932f',
      front: '#c9e8ff',
      accent : '#513828'
    },
    {
      back: '#e98d99',
      front: '#c9e8ff',
      accent : '#7c4e56'
    },
    {
      back: '#eeeeee',
      front: '#352a30',
      accent : '#c3d3e6'
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

import api from '../../services/api';

const state = {
  auth: {},
  alertDialog: false,
  alerts: [],
};

const getters = {
  alertDialog: state => state.alertDialog,
  alerts: state => state.alerts,
};

const mutations = {
  setAlertDialog: (state, value) => (state.alertDialog = value),
  setAlerts: (state, value) => (state.alerts = value),
};

  loadSession: ({ commit }) => {
    if (localStorage.getItem('auth')) {
      commit('setAuth', JSON.parse(localStorage.getItem('auth')));
      return;
    }
  },

  login: async ({ commit }, data) => {
    try {
      const form = new FormData();
      form.append('grant_type', 'password');
      form.append('username', data.username);
      form.append('password', data.password);

      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        auth: {
          username: 'habitten-loteamentos',
          password: 'dbc3c1da-2fe4-418f-af1a-49d20cb33fda'
        }
      };

      const response = await api.instance.post(
        '/oauth/token',
        form,
        config
      );
      localStorage.setItem('auth', JSON.stringify(response.data));
      commit('setAuth', response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  logout({ commit }) {
    localStorage.setItem('auth', '');
    commit('setAuth', {});
  },

  openAlertDialog({ commit }, data) {
    if (data && Array.isArray(data.alerts) && data.alerts.length) {
      commit('setAlertDialog', true);
      commit('setAlerts', data.alerts);
    }
  },

  closeAlertDialog({ commit }) {
    commit('setAlertDialog', false);
    commit('setAlerts', []);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

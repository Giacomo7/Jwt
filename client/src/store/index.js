import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
export default createStore({
    plugins: [createPersistedState()],
    state: {
        token: null,
        isLoggedIn: false
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn;
        }
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
        },
        logout: (state) => {
            state.token = null;
            state.isLoggedIn = false;
        }
    },
    actions: {
        login({ state, commit }, payload) {
            state.isLoggedIn = true;
            commit('setToken', payload.token);
        },
        logout({ state, commit }) {
            commit('logout');
        }
    }
});
//# sourceMappingURL=index.js.map
import { createStore } from 'vuex'
import { api } from '@/api'

export default createStore({
  state: {
    pokemons: [],
    pokemon: null,
    next: null,
    previous: null
  },
  getters: {
  },
  mutations: {
    setPokemons(state, {results, next, previous}) {
      state.pokemons = results;
      state.next = next;
      state.previous = previous;
    },
    setPokemon(state, pokemon) {
      state.pokemon = pokemon;
    }
  },
  actions: {
    async consultarPokemons({ commit }) {
      const res = await api.get("/pokemon");
      commit('setPokemons', res.data);
    },
    consultarPokemon({}, id) {
      return api.get(`/pokemon-form/${id}`);
    },
    async selecionarPokemon({ state, dispatch, commit }, id) {
      const res = await dispatch('consultarPokemon', id);
      commit('setPokemon', res.data);
    },
    async proximos({ state, commit }) {
      if (state.next) {
        const res = await api.get(state.next);
        commit('setPokemons', res.data);
      }
    },
    async anteriores({ state, commit }) {
      if (state.previous) {
        const res = await api.get(state.previous);
        commit('setPokemons', res.data);
      }
    },
  },
  modules: {
  }
})

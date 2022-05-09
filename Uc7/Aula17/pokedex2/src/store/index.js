import { createStore } from 'vuex'
import { api } from '@/api'; //OU PODE-SE IMPORTAR NO VUE COMO: import { api } from '@/api';

export default createStore({
    state: {
        pokemons: [],
        pokemon: null
    },

    getters: {

    },
    mutations: {
        setPokemons(state, pokemons) {
            state.pokemons = pokemons;
        }
    },
    actions: {
        async consultPokemons({ commit }) {

            const res = await api.get("/pokemon");
            console.log(res);
            commit('setPokemons', res.data.results)
        },

        consultPokemon({}, id) {
            return api.get(`/pokemon-form/${id}`); 
        }

    },
    modules: {

    },

})
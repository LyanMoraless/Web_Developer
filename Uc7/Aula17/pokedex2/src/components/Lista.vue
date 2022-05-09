<script setup>
//
import {useStore} from 'vuex'
import { computed, onMounted } from 'vue';
import ListaItem from './ListaItem.vue';

const store = useStore();
const pokemons = computed(() => store.state.pokemons);

onMounted(() => {
  store.dispatch('consultPokemons')
});
</script>

<template>

    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id"> 
        <ListaItem :id="pokemon.name" /> 
      </li> 
    </ul>

</template>


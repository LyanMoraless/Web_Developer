<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const pokemon = computed(() => store.state.pokemon)
</script>
<template>
    <div v-if="pokemon">
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.sprites.front_default" />
        <img :src="pokemon.sprites.back_default" />
    </div>
    <div v-else>
        Selecione um pokemon
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['id']);
const pokemon = ref();

onMounted(async () => {
    const res = await store.dispatch('consultarPokemon', props.id);
    pokemon.value = res.data;
});
</script>
<template>
    <div v-if="pokemon != null">
        <img :src="pokemon.sprites.front_default" />
        {{ pokemon.name }}
    </div>
    <div v-else>
        Carregando ...        
    </div>
</template>
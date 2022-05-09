<template>
  <div class="livros-view">
    <h1>Livros</h1>
    <div class="livros">
      <livro v-for="l in livros" :key="l.id" :livro="l" />
    </div>
  </div>
</template>

<script lang='ts'>
import { useRouter } from 'vue-router';

import Livro from '../components/Livro.vue'
import { useLivrosStore } from '../stores/livros';
import { useSistemaStore } from '../stores/sistema'

export default {
    components: {
      Livro
  },

  setup() {
    const sistemaStore = useSistemaStore();
    const router = useRouter();

    if(!sistemaStore.logado)
         router.push('/login');

    const store = useLivrosStore();
    return {store, sistemaStore}
},


computed: {
  livros() {
    return this.store.items
  }
},

  async mounted() {
    await this.sistemaStore.login("carlosmaiello@gmail.com", "123")
    await this.store.listar();
  }

};
</script>



<style>
.livros {
  display: flex;
  flex-wrap: wrap;
}
</style>
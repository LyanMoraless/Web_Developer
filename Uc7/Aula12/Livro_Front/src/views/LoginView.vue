<template>
  
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4" @submit.prevent="submitForm">
            <label for="email"></label>
            <input type="text" id="email" v-model="email">

            <label for="senha"></label>
            <input type="password" id="senha" v-model="senha">

            <button class="btn btn-primary" type="submit">Entrar</button>

        </div>
        <div class="col-4"></div>
    </div>

</template>

<script>
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useSistemaStore } from '../stores/sistema';
export default {
    setup() {

        const email = ref('');
        const senha = ref('');

        const store = useSistemaStore();
        const router = useRoute();

        const submitForm = async () => {
            await store.login(email.value, senha.value);
            await router.push('/');
        }

        return{
            
            email,
            senha,

            submitForm
        }
    }
}
</script>

<style>

</style>
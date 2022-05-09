import { defineStore } from 'pinia'

export const API = 'http://10.152.46.24:3000'

export const useSistemaStore = defineStore({
  id: 'sistema',
  state: () => ({
    logado: false,
    usuario: null,
    token: ''
  }),

  actions: {
    async login(email:string, senha:string) {
      const res = await fetch(`${API}/usuarios/login`, {
        method: "post",
        body: JSON.stringify({ email, senha }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const conteudo = await res.json();

      this.usuario = conteudo.usuario;
      this.token = conteudo.token;
      this.logado = true;
    },

    logout() {
      this.logado = false;
      this.usuario = null;
      this.token = '';
    }

  }
})

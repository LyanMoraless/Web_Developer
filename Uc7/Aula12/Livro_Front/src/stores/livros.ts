import { defineStore } from 'pinia'
import { API, useSistemaStore } from './sistema';

export const useLivrosStore = defineStore({
  id: 'livros',
  state: () => ({
    items: []
  }),
  
  actions: {
    async listar() {
      const store = useSistemaStore();
      const res = await fetch(`${API}/livros`, { 

            headers: { 

               Authorization: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoyLCJpYXQiOjE2NDkwOTU3ODB9.7e691TyPsy3NCWTVRZroTnrDEjMREHgUyTjRSmKE30g"   
            } 
        }) 

        this.items = await res.json();

  }
  }
})

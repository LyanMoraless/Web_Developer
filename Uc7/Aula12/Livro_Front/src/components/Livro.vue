<template>
     <div class="livro">

          <h3>{{ livro.nome }}</h3>
          <p>{{ livro.sinopse }}</p>
          

     </div>
</template>

<script lang='ts'>
export default {
     props: ['livro']
}
</script>

<style scoped>

h3{
     color: red;
}
.livros .livro { 
     border: 1px solid black; 
     margin: 0 10px 10px ; 
     padding: 10px;
     flex: 0 0 120px; 
}

.livros .livro h3 { 
     margin: 0; 
}

</style>
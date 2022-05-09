<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
@import url(bootstrap/dist/css/bootstrap-grid.min.css);
</style>

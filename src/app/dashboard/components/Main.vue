<template>
    <header class="page-header row">
      <h2>Olá Dashboard</h2>
    </header>
</template>

<script>

import http from '@/http';

export default {
  mounted() {
    http.get('https://pokeapi.co/api/v2/pokemon/1/')
        .then(response => response.data)
        .then((data) => {
          console.log(data);
        });
  },
};
</script>

<style lang="css">
</style>

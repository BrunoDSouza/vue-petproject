<template>
    <header class="page-header row">
      <h1>Olá Dashboard</h1>
      <h3>O usuário logado é {{ auth.user.name }}</h3>
      <h4>Email: {{ auth.user.email }}</h4>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['auth'])
  }
}
</script>

<style lang="css">
</style>

<script>
import { mapState, mapActions } from 'vuex'
import filters from './filters'
import countries from './charts/countries'
import languages from './charts/languages'

export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  mounted () {
    this.setDados()
  },
  methods: {
    ...mapActions(['setDados'])
  },
  components: { filters, countries, languages }
}
</script>

<template>
  <div class="container-fluid">
    <header class="page-header row">
      <h1>Olá Dashboard</h1>
      <h3>O usuário logado é {{ user.name }}</h3>
      <h4>Email: {{ user.email }}</h4>
    </header>
    <div class="well">
      <filters></filters>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <countries></countries>
      </div>
      <div class="col-sm-6">
        <languages></languages>
      </div>
    </div>
  </div>
</template>

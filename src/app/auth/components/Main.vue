<template>
    <div>
      <header class="page-header row">
        <h2>Login</h2>
      </header>
      <Login></Login>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Login from './Forms/Login'

export default {
  components: { Login },
  computed: {
    ...mapGetters(['isLogged'])
  }
}
</script>

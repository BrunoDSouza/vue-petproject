<script>

  export default { };

</script>

<template>
  <ul class="nav navbar-nav">
    <router-link :to="{ name: 'dashboard' }" tag="li" exact >
      <a>Home</a>
    </router-link>
    <router-link :to="{ name: 'auth' }" tag="li" >
      <a>Entrar</a>
    </router-link>
  </ul>
</template>

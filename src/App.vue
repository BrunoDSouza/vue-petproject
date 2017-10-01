<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="container-fluid">
      <HeaderComponet></HeaderComponet>
      <div class="container">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>

import HeaderComponet from '@/components/root/header/main'

export default {
  name: 'app',
  components: { HeaderComponet }
}

</script>

<style src="@/assets/sass/app.scss" lang="sass"></style>

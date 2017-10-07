<script>
import HeaderComponet from '@/components/root/header/main'

export default {
  name: 'app',
  components: { HeaderComponet }
}

</script>

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="container-fluid">
      <PageLoader/>
      <HeaderComponet></HeaderComponet>
      <div class="container">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<style src="@/assets/sass/app.scss" lang="sass"></style>
<style>
  .page-header{
    padding-top: 20px;
  }
</style>

<script>
  import Left from './left'
  import Brand from './brand'
  import Right from './right'

  export default {
    name: 'confee-header',
    components: { Left, Brand, Right },
    data () {
      return {
        isToggleMenu: false
      }
    },
    methods: {
      onToggleMenu () {
        this.isToggleMenu = !this.isToggleMenu
      }
    }
  }
</script>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <Brand @toggle="onToggleMenu"/>
      <div class="collapse navbar-collapse" :class="{ in : isToggleMenu }">
          <Left/>
          <Right/>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

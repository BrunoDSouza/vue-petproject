<script>
  import Left from './left';
  import Brand from './brand';

  export default {
    name: 'confee-header',
    components: { Left, Brand },
    data() {
      return {
        isToggleMenu: false,
      };
    },
    methods: {
      onToggleMenu() {
        this.isToggleMenu = !this.isToggleMenu;
      },
    },
  };
</script>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <Brand @toggle="onToggleMenu"/>
      <div class="collapse navbar-collapse" :class="{ in : isToggleMenu }">
          <Left/>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<template>
  <div id="app">
    <navigation-bar>Loading Navigation bar..</navigation-bar>
    <router-view />
  </div>
</template>
<script>
  import NavigationBar from './components/navigation-bar/navigation-bar.vue';
  export default {
    name: 'App',
    components: {
      'navigation-bar': NavigationBar
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

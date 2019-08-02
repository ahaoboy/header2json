<template>
  <div id="app">
    <Header2Json></Header2Json>
  </div>
</template>

<script>
  import Header2Json from './components/Header2Json'

  export default {
    name: 'app',
    components: {
      Header2Json
    }
  }
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>

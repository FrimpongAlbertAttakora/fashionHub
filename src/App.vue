<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: '',
  components: {
    Header
  }
}
</script>

<style>
*{
  margin: 0;
  font-family: sans-serif;
  overflow: hidden;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

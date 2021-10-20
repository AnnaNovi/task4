<template>
  <div id="app">
    <v-form />
  </div>
</template>

<script>
import vForm from './components/v-form.vue'
export default {
  name: 'App',
  components: {
    vForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

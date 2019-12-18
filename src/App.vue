<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TxtButton />
    <HelloWorld msg="Welcome to Your Vue.js App Testing"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TxtButton from './components/TxtButton.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TxtButton
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
  margin-top: 60px;
}
</style>

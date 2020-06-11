<template>
  <div id="app">
    <div class="logo">
      <img class="logo__image" alt="Vue logo" src="./assets/logo.png">
      <b class="logo__name">olodymyr</b>
    </div>
    <HelloWorld msg="Welcome!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo__image {
  border-radius: 100px;
  box-shadow: 0 0 25px #41B883;
}
@import url(https://fonts.googleapis.com/css?family=Rubik+One&subset=latin,cyrillic);
.logo__name {
  font-family: 'Rubik One', sans-serif;
  font-size: 80px;
  // text-transform: uppercase;
  background: linear-gradient(90deg, #35495E 10%, #41B883);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #35495E;
  // display: table;
  // margin: 20px auto;
}
</style>

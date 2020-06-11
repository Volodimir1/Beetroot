<template>
  <div id="app">
    <div class="logo">
      <img class="logo__image" alt="Vue logo" src="./assets/logo.png">
      <span class="logo__name">
      <b class="logo__name-wrapper">olodymyr</b>
      </span>
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
.logo {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
&__image {
  border-radius: 100px;
  box-shadow: 0 0 30px #41B883;
}
&__name {
  position: relative;
  bottom: 25px;
  right: 60px;
  // padding: 0;
  // padding-bottom: 35px;
}
@import url(https://fonts.googleapis.com/css?family=Rubik+One&subset=latin,cyrillic);
&__name-wrapper {
  font-family: 'Rubik One', sans-serif;
  font-size: 80px;
  // text-transform: uppercase;
  background: linear-gradient(175deg, #35495E 45%, #41B883 55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // color: #35495E;
  // display: table;
  // margin: 5px auto;
}
}
</style>

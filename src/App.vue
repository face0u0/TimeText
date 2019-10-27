<template>
  <div id="app">
    <dark-header></dark-header>
    <!--    <img src="./assets/logo.png">-->
    <!--    <router-link to="/">Home</router-link>-->
    <router-view />
  <dark-footer></dark-footer>
  </div>
</template>

<script>
import CreatePicture from './components/CreatePicture'
import DarkHeader from './components/DarkHeader'
import DarkFooter from './components/DarkFooter'

export default {
  name: "App",
  components: {DarkHeader, CreatePicture, DarkFooter}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 .webfont, .btn, .modal-title, input, select{
    font-family: 'Satisfy', cursive;
  }

  #app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>

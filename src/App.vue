<template>
  <div id="app">
    <dark-header></dark-header>
    <!--    <img src="./assets/logo.png">-->
    <!--    <router-link to="/">Home</router-link>-->
    <div class="mb-5"></div>
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
.logo {
  font-family: 'Saira Condensed', sans-serif;

}
 .webfont, .btn, .modal-title, input, option{
   font-family: 'Saira Condensed', sans-serif;
  }

 .japan-fonts{
   font-family: 'M PLUS 1p', sans-serif;
 }

  #app{
    display: flex;
    margin-top: 0;
    flex-direction: column;
    min-height: 100vh;
  }


</style>

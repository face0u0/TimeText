<template>
  <div id="home" class="container">
    <my-name v-on:name="username=$event"></my-name>
    <dark-header></dark-header>
    <div>
      <picture-list v-bind:username="username"></picture-list>
    </div>
    <create-picture v-bind:username="username" class="mt-5 offset-6 offset-sm-11"></create-picture>
  </div>

</template>

<script>
import PictureList from '../components/PictureList'
import CreatePicture from '../components/CreatePicture'
import DarkHeader from '../components/DarkHeader'
import MyName from '../components/MyName'
export default {
  name: 'Home',
  components: {DarkHeader, CreatePicture, PictureList, MyName},
  data: function () {
    return {
      username: ""
    }
  }
}
</script>

<style>
  .webfont, .btn, .modal-title{
    font-family: 'Satisfy', cursive;
  }

</style>

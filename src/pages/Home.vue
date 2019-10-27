<template>
  <div id="home" class="container">
    <my-name v-on:name="username=$event"></my-name>
    <create-picture v-bind:username="username" class="my-3 offset-7 offset-sm-9 offset-md-10 offset-lg-11"></create-picture>
    <div>
      <picture-list v-bind:username="username"></picture-list>
    </div>
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
// d45fcc7ee858cf5
</script>


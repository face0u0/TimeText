<template>
  <div id="home" class="container">
  <dark-header
  v-on:name="username=$event"></dark-header>
    <div>
      <picture-list v-bind:username="username"></picture-list>
    </div>
  </div>
</template>

<script>
import PictureList from '../components/PictureList'
import CreatePicture from '../components/CreatePicture'
import DarkHeader from '../components/DarkHeader'
export default {
  name: 'Home',
  components: {DarkHeader, CreatePicture, PictureList},
  data: function () {
    return {
      username: ""
    }
  }
}
</script>

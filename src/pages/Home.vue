<template>
  <div id="home" class="container">
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
      </b-navbar-nav>
      <create-picture></create-picture>
    </b-navbar>

    <div>
      <picture-list></picture-list>
<!--      <create-picture></create-picture>-->
    </div>
  </div>
</template>

<script>
import PictureList from '../components/PictureList'
import CreatePicture from '../components/CreatePicture'
export default {
  name: 'Home',
  components: {CreatePicture, PictureList},
  data: function () {
    return {
      username: "Hir"
    }
  }
}
</script>

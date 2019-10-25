<template>
  <div id="home">
    <div>
      <h2>Vue.jsではじめるSPA</h2>
      <picture-list></picture-list>
      <create-picture></create-picture>
    </div>
  </div>
</template>

<script>
import PictureList from '../components/PictureList'
import CreatePicture from '../components/CreatePicture'
export default {
  name: 'Home',
  components: {CreatePicture, PictureList},
  create: function () {
    console.log('AAAAA')
  }
}
</script>

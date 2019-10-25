<template>
  <div id="home">
    <div>
      <h2>Vue.jsではじめるSPA</h2>
      <picture-list></picture-list>
    </div>
  </div>
</template>

<script>
import PictureList from '../components/PictureList'
export default {
  name: 'Home',
  components: {PictureList},
  create: function () {
    console.log('AAAAA')
  }
}
</script>

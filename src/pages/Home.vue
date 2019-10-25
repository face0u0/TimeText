<template>
  <div id="home">
    <div>
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
  data: function () {
    return {
      username: "Hir"
    }
  }
}
</script>

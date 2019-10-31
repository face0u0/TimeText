<template>
  <div id="home" class="container">
    <my-name v-on:name="morning($event)"></my-name>
    <create-picture
            v-bind:username="username"
            v-on:search="search($event)"
            ></create-picture>
    <div>
      <search-picture v-on:picturelist="picturelistbysearch=$event"
                      v-bind:username="username"
                      ref="searchr"
      ></search-picture>
      <picture-list v-bind:picturelist="picturelistbysearch"></picture-list>
    </div>
  </div>

</template>

<script>
import PictureList from '../components/PictureList'
import CreatePicture from '../components/CreatePicture'
import DarkHeader from '../components/DarkHeader'
import MyName from '../components/MyName'
import SearchPicture from "../components/SearchPicture";

export default {
  name: 'Home',
  components: {DarkHeader, CreatePicture, PictureList, MyName, SearchPicture},
  data: function () {
    return {
      picturelistbysearch: [],
      username: "",
    }
  },
  mounted: function () {

  },
  methods: {
    search: function (id, name) {
      this.$refs.searchr.$emit('searchbyother', id, name)
    },
    morning: function (name) {
      this.username = name;
      const l = localStorage.getItem('search');
      if (l) {
        this.search(l, name)
      }
    }
  },
}
// d45fcc7ee858cf5
</script>


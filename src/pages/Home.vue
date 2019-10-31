<template>
  <div id="home" class="container">
    <my-name v-on:name="username=$event"></my-name>
    <create-picture
            v-on:newdata="newdata=$event"
            v-bind:username="username"
            class="my-3 offset-7 offset-sm-9 offset-md-10 offset-lg-11"></create-picture>
    <div>
      <search-picture v-on:picturelist="picturelistbysearch=$event"
                      v-bind:username="username"></search-picture>
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
      newdata: null,
      picturelistbysearch: [],
      username: ""
    }
  },
  computed: {
    picturelist: function () {
      let newlist = this.picturelistbysearch;
      if(this.newdata == null){
        newlist.unshift(this.newdata);
      }
      return newlist;
    }
  }
}
// d45fcc7ee858cf5
</script>


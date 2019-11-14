<template>
  <div id="home">
    <my-name v-on:name="morning($event)"></my-name>

        <search-picture v-on:picturelist="picturelistbysearch=$event"
                        v-bind:username="username"
                        ref="searchr"
        ></search-picture>
    <div class="container">
      <create-picture
        v-bind:username="username"
        v-on:search="search($event)"
      ></create-picture>
      <picture-list v-bind:picturelist="orderdList"></picture-list>
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
    computed: {
      orderdList: function () {
          const list = this.picturelistbysearch;
          list.sort(function (a,b) {
              return (a.date > b.date ? 1 : -1)
          });
          var prev=0;
          var index=-1;
          const newList = [];
          for (let i=0; i<list.length; i++){
              const p = list[i];
              if(prev !== p['ymd']) {
                  index++;
                  newList.push([]);
                  prev = p['ymd'];
              }
              newList[index].push(p);
          }
          return newList
      }
    }
}
// d45fcc7ee858cf5
</script>


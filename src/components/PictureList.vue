<template>
  <div>
    <button v-on:click="getPictureList">GET</button>
    <div v-bind:key="p['id']" v-for="p in pictureList">
      <img :src="p['image_url']" />
<!--      <p>{{p}}</p>-->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
  name: "PictureList",
  data: function() {
    return {
      pictureList: null,
      username: 'Hir'
    };
  },
  methods: {
    getPictureList: function() {
      axios
        .get(
          "https://util-api-face.herokuapp.com/clspict/me/all?user_name=" +
            this.username
        )
        .then(function(response) {
          this.pictureList = response.data;
          // console.log(this.pictureList[0])
        }.bind(this))
        .catch(function(reason) {
          console.log(reason);
        });
    }
  }
};
</script>

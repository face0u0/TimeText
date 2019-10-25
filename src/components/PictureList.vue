<template>
  <div>
    <select v-model="search">
      <option v-bind:key="i" v-for="(l, i) in classtimelist" v-bind:value="i">
        {{ l }}
      </option>
    </select>
    <button v-on:click="getPictureList">GET</button>
    <div v-bind:key="p['id']" v-for="p in pictureList">
      <img :src="p['image_url']" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PictureList",
  data: function() {
    return {
      pictureList: null,
      username: "Hir",
      search: 0
    };
  },
  computed: {
    classtimelist: function() {
      const classlist = [];
      for (let i = 0; i < 25; i++) {
        classlist.push(
          ["月", "火", "水", "木", "金"][Math.floor(i / 5)] +
            ((i % 5) + 1) +
            "限"
        );
      }
      return classlist;
    }
  },
  methods: {
    getPictureList: function() {
      axios
        .get(
          "https://util-api-face.herokuapp.com/clspict/me/part/" +
            this.search +
            "?user_name=" +
            this.username
        )
        .then(
          function(response) {
            this.pictureList = response.data;
            console.log(this.pictureList)
          }.bind(this)
        )
        .catch(function(reason) {
          console.log(reason);
        });
    }
  }
};
</script>

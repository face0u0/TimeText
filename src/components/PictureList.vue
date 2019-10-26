<template>
  <div>
    <div class="row">
      <div class="col-10 offset-1 col-md-6 offset-md-3">
        <b-input-group>
          <b-form-select v-model="search">
            <option
              v-bind:key="i"
              v-for="(l, i) in classtimelist"
              v-bind:value="i"
            >
              {{ l }}
            </option>
          </b-form-select>
          <b-input-group-append>
            <b-button v-on:click="getPictureList">GET</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>

    <div class="row">
      <div v-bind:key="p['id']" v-for="p in pictureList" class="col-12 col-sm-6 col-md-4">
        <div class="h-100">
          <a :href="p['image_url']" target="_blank">
            <b-card
              :img-src="p['image_url']"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mt-2"
            >
              <b-card-text class="text-muted">
                {{ p["body"] }}
              </b-card-text>
            </b-card>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['username'],
  name: "PictureList",
  data: function() {
    return {
      pictureList: null,
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
            console.log(this.pictureList);
          }.bind(this)
        )
        .catch(function(reason) {
          console.log(reason);
        });
    }
  }
};
</script>

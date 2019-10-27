<template>
  <div>
    <b-button v-b-modal.modal-1 variant="warning" class="position-absolute"
      >Picture</b-button
    >
    <b-modal id="modal-1" title="Add new Image" :hide-footer="true">
      <form>
        <b-form-group label-for="file-small"  label-size="sm">
          <b-form-file
            id="file-small"
            accept="image/*"
            type="file"
            size="sm"
            v-on:change="setFile($event)"
          ></b-form-file>
        </b-form-group>
        <input
          class="form-control mt-2"
          v-model="createRequest['body']"
          type="text"
          placeholder="comment"
        />
        <div class="text-right">
          <button
            class="btn btn-outline-warning mt-2"
            type="submit"
            v-on:click="getLocation"
          >
            submit
          </button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["username"],
  name: "CreatePicture",
  data: function() {
    return {
      image_file: null,
      imgurData: null,
      status: false,
      createRequest: {
        image_url: "",
        body: "",
        class_time: null,
        lat: null,
        loc: null,
        alt: null
      }
    };
  },
  methods: {
    setFile: function(e) {
      this.image_file = e.target.files[0];
    },
    getLocation: function() {
      if (!navigator.geolocation) {
        alert("no use location data");
      }
      const options = {
        enableHighAccuracy: true,
        // timeout: 5000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(
        this.sendData,
        this.sendData,
        options
      );
    },
    sendData: function(position) {
      if (!this.image_file) {
        return;
      }
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
      this.imgurData = new FormData();
      this.imgurData.append("image", this.image_file);
      if('coords' in position) {
        this.createRequest["lat"] = position.coords.latitude;
        this.createRequest["lng"] = position.coords.longitude;
        this.createRequest["alt"] = position.coords.altitude;
      }
      const imgurAxios = axios.create({
        baseURL: "https://api.imgur.com/3/image"
      });
      imgurAxios.defaults.headers.common["Authorization"] = `Client-ID d45fcc7ee858cf5`;
      imgurAxios
        .post("", this.imgurData)
        .then(
          function(res) {
            this.createRequest["image_url"] = res.data.data.link;
            this.createRequest["class_time"] = Math.round(
              new Date().getTime() / 1000
            );
            axios
              .post(
                "https://util-api-face.herokuapp.com/clspict/class_contents?user_name=" +
                  this.username,
                this.createRequest
              )
              .then(
                function(response) {
                  console.log(response);
                  this.createRequest = {
                    image_url: "",
                    body: "",
                    class_time: null,
                    lat: 0,
                    loc: 0,
                    alt: 0
                  };
                }.bind(this)
              )
              .catch(function(reason) {
                console.log(reason);
              });
          }.bind(this)
        )
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

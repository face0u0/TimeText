<template>
  <div>
<!--    <b-button v-b-modal.modal-1 variant="warning" -->
<!--      >Picture</b-button-->
<!--    >-->
    <label class="position-absolute">
      <span class="btn btn-warning">
        <input v-on:change="setFile($event)"
         id="file-small"
         accept="image/*"
         type="file"
         style="display:none"
         capture="environment"/>
        Picture
      </span>
    </label>
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
      this.getLocation();
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

<template>
    <div>
      <div id="gray" v-if="loading">
          <div style="height: 40vh;">
            <h3 v-if="loading" class="webfont text-black col-12 no-content">Uploading...</h3>
            <div class="text-center">
              <b-spinner variant="black" label="Spinning" class="m-5"></b-spinner>
            </div>
        </div>
      </div>

<!--      <div class="my-3 offset-7 offset-sm-9 offset-md-10 offset-lg-11">-->
        <label>
        <span class="float">
            <input v-on:change="setFile($event)"
             id="file-small"
             accept="image/*"
             type="file"
             style="display:none"
             capture="environment"/>
            <i class="fa fa-plus my-float"></i>
          </span>
        </label>
      </div>
<!--    </div>-->
</template>

<script>
import axios from "axios";

export default {
  props: ["username"],
  name: "CreatePicture",
  data: function() {
    return {
        loading: false,
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
      this.loading = true;
      console.log("########");
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
            console.log(res);
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
                  this.$emit('search', response.data['class_time']);
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
              }).finally(function () {
                this.loading= false;
            }.bind(this));
          }.bind(this)
        )
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style>
  #gray {
    position:			fixed;
    top:				0;
    left:				0;
    height:				100%;
    width:				100%;
    background:			white;
    opacity:			0.9;
    z-index:			1;
  }

  .float{
      position:fixed;
      width:60px;
      height:60px;
      bottom:40px;
      right:40px;
      background-color: rgba(0, 129, 101, 0.78);
      color: white;
      border-radius:50px;
      text-align:center;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
      z-index: 5;
    }
    .float:hover{
      cursor: pointer;
    }

    .my-float{
      margin-top:22px;
    }
</style>

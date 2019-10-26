<template>
  <div>
    <b-button v-b-modal.modal-1 variant="info">Add Picture</b-button>
    <b-modal id="modal-1" title="Add new Image" :hide-footer="true">
      <form>
        <input
          accept="image/*"
          multiple
          type="file"
          className="input"
          id="upload-img"
          v-on:change="setFile($event)"
        />
        <input
          class="form-control mt-2"
          v-model="createRequest['body']"
          type="text"
          placeholder="body"
        />
        <button
          class="btn btn-primary mt-2"
          type="submit"
          v-on:click="sendData"
        >
          submit
        </button>
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
      imgurHeader: null,
      createRequest: {
        image_url: "",
        body: "",
        class_time: null,
        block: false
      }
    };
  },
  methods: {
    setFile: function (e) {
      this.image_file = e.target.files[0]
    },
    sendData: function() {
      if (this.createRequest["block"] || !this.image_file) {
        return;
      }
      this.createRequest["block"] = true;
      this.imgurData = new FormData();
      this.imgurData.append("image", this.image_file);

      const imgurAxios = axios.create({
        baseURL: "https://api.imgur.com/3/image",
      })
      imgurAxios.defaults.headers.common['Authorization'] = `Client-ID d45fcc7ee858cf5`
      imgurAxios.post('', this.imgurData).then(function (res) {
        this.createRequest['image_url'] = res.data.data.link;
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
                block: false
              };
            }.bind(this)
          )
          .catch(function(reason) {
            console.log(reason);
          });

      }.bind(this)).catch(function (err) {
        console.log(err)
      })




    }
  }
};
</script>

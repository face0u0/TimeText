<template>
  <div>
    <b-button v-b-modal.modal-1 variant="info">Add Picture</b-button>
    <b-modal id="modal-1" title="Add new Image">
      <form>
        <input
          class="form-control mt-2"
          v-model="createRequest['image_url']"
          type="text"
          placeholder="image_url"
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
  name: "CreatePicture",
  data: function() {
    return {
      username: "Hir",
      createRequest: {
        image_url: "",
        body: "",
        class_time: null
      }
    };
  },
  methods: {
    sendData: function() {
      this.createRequest["class_time"] = Math.round(
        new Date().getTime() / 1000
      );
      console.log(parseInt(new Date()));
      axios
        .post(
          "https://util-api-face.herokuapp.com/clspict/class_contents?user_name=" +
            this.username,
          this.createRequest
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(reason) {
          console.log(reason);
        });
    }
  }
};
</script>

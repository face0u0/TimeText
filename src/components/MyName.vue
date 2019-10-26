<template>
  <div>
    <!--    <b-button v-b-modal.modal-2 variant="info">Set Username</b-button>-->
    <b-modal
      id="modal-2"
      title="Username"
      :hide-footer="true"
      v-on:hidden="setname(username)"
    >
      <form>
        <input class="form-control mt-2" v-model="username" />
        <button v-on:click="createname(username)" class="btn btn-warning mt-2">
          Create
        </button>
        <button v-on:click="setname(username)" class="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      username: ""
    };
  },
  mounted: function() {
    if (localStorage.name) {
      this.username = localStorage.name;
      this.setname(this.username);
    } else {
      this.$root.$emit("bv::show::modal", "modal-2", "#btnShow");
    }
  },
  methods: {
    createname: function(event) {
      this.$root.$emit("bv::hide::modal", "modal-2", "#btnShow");
      axios
        .post("https://util-api-face.herokuapp.com/users", { name: event })
        .then(
          function(response) {
            localStorage.name = event;
            this.$emit("name", event);
          }.bind(this)
        )
        .catch(
          function(reason) {
            console.log(reason);
            this.$root.$emit("bv::show::modal", "modal-2", "#btnShow");
          }.bind(this)
        );
    },
    setname: function(event) {
      this.$emit("name", event);
      this.$root.$emit("bv::hide::modal", "modal-2", "#btnShow");
      axios
        .get(
          "https://util-api-face.herokuapp.com/clspict/me/all?user_name=" +
            event
        )
        .then(function(response) {
          localStorage.name = event;
          console.log(response);
        })
        .catch(
          function(reason) {
            console.log(reason);
            this.$root.$emit("bv::show::modal", "modal-2", "#btnShow");
          }.bind(this)
        );
    }
  }
};
</script>

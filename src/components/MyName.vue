<template>
  <div>
    <!--    <b-button v-b-modal.modal-2 variant="info">Set Username</b-button>-->
    <b-modal
      id="modal-2"
      title="Sign-in / Log-in"
      :hide-footer="true"
      v-on:hidden="confirmname"
    >
      <form>
<!--        <input class="form-control mt-2" v-model="username" />-->
        <button v-on:click="signUp" class="btn btn-warning mt-2">
          Google
        </button>
<!--        <button v-on:click="setname(username)" class="btn btn-primary mt-2">-->
<!--          Submit-->
<!--        </button>-->
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: function() {
    return {
      username: ""
    };
  },
  mounted: function() {
    if (localStorage.name) {
      this.username = localStorage.name;
      this.createname(this.username);
    } else {
      this.$root.$emit("bv::show::modal", "modal-2", "#btnShow");
    }
  },
  methods: {
    signUp: function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(obj => {
          this.username = obj.user.uid;
          this.createname(this.username)
        })
        .catch(error => alert(error.message))
    },
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
            console.log(reason.response);
            this.$root.$emit("bv::show::modal", "modal-2", "#btnShow");
          }.bind(this)
        );
    },
    confirmname: function(event){
      setTimeout(this.createname, 2000, this.username)
    },
  }
};
</script>

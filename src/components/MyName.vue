<template>
  <div>
    <b-modal
      id="modal-2"
      title="Sign-in / Log-in"
      :hide-footer="true"
      v-on:hidden="confirmname"
    >
      <form>
        <button v-on:click="signUp()" class="btn btn-warning mt-2">
          Google
        </button>
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
  created: function() {
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
          this.createname(this.username);
        })
        .catch(error =>
            console.log(error.message)
        )
    },
    createname: function(event) {
      axios
        .post("https://util-api-face.herokuapp.com/users", { name: event })
        .then(
          function(response) {
              console.log(response);
              this.$root.$emit("bv::hide::modal", "modal-2", "#btnShow");
              localStorage.name = event;
              this.$emit("name", event)
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

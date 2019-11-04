<template>
  <div>
    <b-modal
      id="modal-2"
      title="Sign-in / Log-in"
      :hide-footer="true"
      v-on:hidden="confirmname"
    >
      <div class="text-center" v-if="loading">
        <h5 class="text-muted">ログイン中です...</h5>
        <b-spinner variant="secondary" label="Spinning" class="m-5"></b-spinner>
      </div>
      <div v-else>
        初めての方へ<br/>
        <span class="webfont">TimeText</span>についての説明は
        <router-link to="/about" class="">こちら</router-link>
        へどうぞ
        <form>
          <button v-on:click="signUp()" class="btn btn-info mt-2">
            Googleでログイン
          </button>
        </form>
      </div>
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
      username: "",
      loading: false
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
      this.loading = true;
      firebase.auth().signInWithPopup(provider)
        .then(obj => {
          this.username = obj.user.uid;
          this.createname(this.username);
        })
        .catch(error => {
          console.log(error.message);
          this.loading = false;
        })
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
        ).finally(function () {
           this.loading = false;
        }.bind(this));
    },
    confirmname: function(event){
      setTimeout(this.createname, 2000, this.username)
    },
  }
};
</script>

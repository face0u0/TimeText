<template>
  <div>
<!--    <b-button v-b-modal.modal-2 variant="info">Set Username</b-button>-->
    <b-modal id="modal-2" title="Username" :hide-footer="true" :visible="status">
      <form>
        <input class="form-control mt-2" v-model="username" />
        <button
          v-on:click="setname(username)"
          class="btn btn-primary mt-2"
        >Submit</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
  data: function() {
    return {
      username: "",
      status: true
    };
  },
  methods: {
    setname:function (event) {
      this.$emit('name', event);
      this.status = false;

      axios.get('https://util-api-face.herokuapp.com/clspict/me/all?user_name='+event)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (reason) {
          console.log(reason)
          this.status = true
        }.bind(this))}
  }
};
</script>

<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
      </b-navbar-nav>
      <create-picture v-bind:username="username"></create-picture>
      <my-name
        v-on:name="getname($event)"
      ></my-name>
    </b-navbar>
  </div>
</template>

<script>
import CreatePicture from "../components/CreatePicture";
import MyName from "../components/MyName";

export default {
  name: "DarkHeader",
  components: { CreatePicture, MyName },
  data: function () {
    return {
      username: ""
    }
  },
  methods: {
    getname: function (event) {
      this.$emit('name', event)
      this.username = event
    }
  }
};
</script>

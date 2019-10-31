<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/" class="logo">TimeText</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
            <router-link to="/about" right class="text-muted logo">About</router-link>
<!--        <b-nav-item href="/about" right>About</b-nav-item>-->
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import CreatePicture from "../components/CreatePicture";

export default {
  name: "DarkHeader",
  components: { CreatePicture },
  data: function () {
    return {
      username: ""
    }
  }
};
</script>



<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-nav>
        <b-nav-item href="/" class="webfont">TimeText</b-nav-item>
      </b-navbar-nav>
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
  }
};
</script>



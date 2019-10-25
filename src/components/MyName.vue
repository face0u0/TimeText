<template>
  <div>
    <button v-on:click="$emit('name', username)"></button>
    <input v-model="username" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      username: "",
      classdata: null
    };
  },
  methods: {
    pushname: function() {
      this.$axios
        .get(
          "https://util-api-face.herokuapp.com/me/all?user_name=" +
            this.username
        )
        .then(function(response) {
          this.classdata = response.data;
        })
        .catch(function(reason) {
          console.log(reason.data);
        });
    }
  }
};
</script>

<template>
  <div>
    <div class="row">
      <div v-bind:key="p['id']" v-for="p in picturelist" class="col-6 col-md-4 mb-3">
        <div class="h-100">
          <a :href="p['image_url']" target="_blank" >
            <b-card
              :img-src="p['image_url']"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="border-0 shadow"
              body-tag="span"
            >
              <b-card-text class="text-muted">
                <span class="webfont">{{ getText(p["ymd"].toString()) }}</span>
              </b-card-text>
              <b-card-text class="text-muted">
                <small>{{ p["body"] }}</small>
              </b-card-text>
            </b-card>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['picturelist'],
  name: "PictureList",
  data: function() {
    return {
    };
  },
  methods: {
    getText: function(p){
      return p.slice(-4)
    }
  }
};
</script>

<style>
  a:hover, a:active{
    text-decoration: none;
  }

  .no-content{
    margin-top: 20vh;
  }
</style>

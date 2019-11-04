<template>
  <div class="section footer-classic context-dark bg-image wrapper" style="background: #111111;">
    <div class="">
      <div class="container-fluid">
      <div class="pt-3 row text-muted">
        <div class="col-md-4 col-xl-5">
          <div class="pr-xl-4 pb-1">
            <router-link to="/" right class="rights text-muted logo h3">TimeText</router-link>
          </div>
        </div>
        <div class="col-md-4">
          <p class="logo">created by face9363</p>
        </div>
        <div class="col-md-4 col-xl-3 mb-1">
          <router-link to="/about" right class="text-muted logo">About</router-link>
        </div>
    </div>
      </div>
    <div class="row no-gutters social-container">
      <div class="col"><a class="social-inner" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftimetext.netlify.com%2F&amp;src=sdkpreparse"><span class="icon mdi mdi-facebook"></span><span class="text-muted">Share with Facebook</span></a></div>
      <div class="col"><a class="social-inner" href="https://twitter.com/share?ref_src=twsrc%5Etfw"><span class="icon mdi mdi-twitter"></span><span class="text-muted">Share with twitter</span></a></div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "DarkFooter",
    components: {},
    data: function () {
      return {
        username: ""
      }
    }
  };
</script>

<style>
  .wrapper {
    margin-top: auto;
  }

  .context-dark, .bg-gray-dark, .bg-primary {
    color: rgba(255, 255, 255, 0.8);
  }

  .footer-classic a, .footer-classic a:focus, .footer-classic a:active {
    color: #ffffff;
  }
  .nav-list li {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .nav-list li a:hover:before {
    margin-left: 0;
    opacity: 1;
    visibility: visible;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .social-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 23px;
    font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }
  .social-container .col {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .nav-list li a:before {
    content: "\f14f";
    font: 400 21px/1 "Material Design Icons";
    color: #4d6de6;
    display: inline-block;
    vertical-align: baseline;
    margin-left: -28px;
    margin-right: 7px;
    opacity: 0;
    visibility: hidden;
    transition: .22s ease;
  }
</style>

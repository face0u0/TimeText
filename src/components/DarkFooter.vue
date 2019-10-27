<template>
  <div class="section footer-classic context-dark bg-image wrapper" style="background: #2d3246;">
    <div class="">
      <div class="row row-30 pt-4 text-muted">
        <div class="col-md-4 col-xl-5">
          <div class="pr-xl-4">
            <p class="rights webfont h3">TimeText</p>
          </div>
        </div>
        <div class="col-md-4">
<!--          <dl class="contact-list">-->
<!--            <dd><a href="mailto:#">dkstudioin@gmail.com</a></dd>-->
<!--          </dl>-->
          <p class="webfont">created by face9363</p>
        </div>
        <div class="col-md-4 col-xl-3">
          <router-link to="/about" right class="text-muted webfont">About</router-link>
        </div>
    </div>
    <div class="row no-gutters social-container">
      <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
      <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
      <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
      <div class="col"><a class="social-inner" href="#"><span class="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
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

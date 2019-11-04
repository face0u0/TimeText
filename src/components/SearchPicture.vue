<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-5 mb-md-4 mb-3 mt-4 mt-md-3 text-white webfont">Notes are here</h1>
        <div class="row">
          <div class="col-8 offset-2 col-md-6 offset-md-3 mb-3">
            <b-input-group class="">
              <b-input-group-prepend is-text>
                <b-form-checkbox switch size="sm" class="mr-n2"
                                 v-on:change="setChecked($event)">
                  <span class="sr-only">around</span>
                </b-form-checkbox>
              </b-input-group-prepend>

              <b-form-select
                v-on:change="setSearch($event)"
                v-bind:value="search">
                <option
                  v-bind:key="i"
                  v-for="(l, i) in classtimelist"
                  v-bind:value="i"
                  class="webfont"
                >
                  {{ l }}
                </option>
              </b-form-select>
            </b-input-group>

<!--            <div class="form-group checkbox-wrap mt-2">-->
<!--              <label class="label-checkbox">-->
<!--                <input type="checkbox" v-on:change="setChecked($event)"/>-->
<!--                <span class="lever">Enhancement</span>-->
<!--              </label>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
    <h3 v-if="loading" class="webfont text-muted col-12 no-content">Loading...</h3>
    <h3 v-else-if="!pictureList[0]" class="webfont text-muted col-12 no-content">__no content__</h3>
    <div class="text-center" v-show="loading">
      <b-spinner variant="secondary" label="Spinning" class="m-5"></b-spinner>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['username'],
    name: 'SearchPicture',
    data: function () {
      return {
        pictureList: [],
        search: 0,
        checked: false,
        loading: false
      }
    },
    created: function () {
      this.searchByOther()
    },
    computed: {
      classtimelist: function () {
        const classlist = []
        for (let i = 0; i < 25; i++) {
          classlist.push(
            ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][Math.floor(i / 5)] +
            ((i % 5) + 1) +
            ''
          )
        }
        return classlist
      },
    },
    methods: {
      searchByOther: function () {
        this.$on('searchbyother', function (value, name) {
          this.setSearch(value, name)
        })
      },
      setChecked: function (checked) {
        this.checked = (checked)
        this.getPictureList()
      },
      setSearch: function (value, name) {
        localStorage.setItem('search', value)
        this.search = value
        this.getPictureList(name)
      },
      getText: function (p) {
        return p.slice(-4)
      },
      getPictureList: function (name) {
        this.loading = true
        this.pictureList = []
        this.$emit('picturelist', this.pictureList)
        let url, username
        if (name !== undefined) {
          username = name
        } else {
          username = this.username
        }
        if (this.checked) {
          url = '/me/around/' + this.search + '?user_name=' + username
        } else {
          url = '/me/part/' + this.search + '?user_name=' + username
        }
        axios
          .get(
            'https://util-api-face.herokuapp.com/clspict' + url
          )
          .then(
            function (response) {
              this.pictureList = response.data.reverse()
              this.$emit('picturelist', this.pictureList)
              console.log(this.pictureList)
            }.bind(this)
          )
          .catch(function (reason) {
            console.log(reason.response)
          })
          .finally(function () {
            this.loading = false
          }.bind(this))
      }
    }
  }
</script>

<style>
  .jumbotron {
    background-image: url("/static/image/blackboard.jpg");
    background-size: cover;
    background-position: center 60%;
    /*padding-bottom:40rem;*/
  }

  .label-checkbox input[type="checkbox"]{
    display: none;
  }
  .label-checkbox{
    cursor: pointer;

    position: relative;
  }
  .label-checkbox .lever{
    color: #ccc;
    font-weight: normal;
    display: inline-block;
    padding: 6px 40px;
    border: 1px solid #e5e5e5;
    border-radius:20px;
    margin-right: 10px;
    margin-bottom: 10px;
    -webkit-transition: all 300ms cubic-bezier(1, 0, 0, 1);
    -moz-transition: all 300ms cubic-bezier(1, 0, 0, 1);
    -o-transition: all 300ms cubic-bezier(1, 0, 0, 1);
    transition: all 300ms cubic-bezier(1, 0, 0, 1);
    -webkit-transition-timing-function: cubic-bezier(1, 0, 0, 1);
    -moz-transition-timing-function: cubic-bezier(1, 0, 0, 1);
    -o-transition-timing-function: cubic-bezier(1, 0, 0, 1);
    transition-timing-function: cubic-bezier(1, 0, 0, 1);
  }
  .label-checkbox .lever:before{
    content:'';
    position: absolute;
    left: 4px;
    top:4px;
    border: 1px solid #e5e5e5;
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius:100%;
    -webkit-transition: all 300ms cubic-bezier(1, 0, 0, 1);
    -moz-transition: all 300ms cubic-bezier(1, 0, 0, 1);
    -o-transition: all 300ms cubic-bezier(1, 0, 0, 1);
    transition: all 300ms cubic-bezier(1, 0, 0, 1);
    -webkit-transition-timing-function: cubic-bezier(1, 0, 0, 1);
    -moz-transition-timing-function: cubic-bezier(1, 0, 0, 1);
    -o-transition-timing-function: cubic-bezier(1, 0, 0, 1);
    transition-timing-function: cubic-bezier(1, 0, 0, 1);
  }
  .label-checkbox:hover .lever:before{
    border-color: #ddd;
  }
  .label-checkbox input[type="checkbox"]:checked + .lever{
    background: skyblue;
    color: #fff;
  }
  .label-checkbox input[type="checkbox"]:checked + .lever{
    border-color:skyblue;
  }
  .label-checkbox input[type="checkbox"]:checked + .lever:before{
    left: 100%;
    margin-left: -44px;
    border-color: #fff;
  }
</style>

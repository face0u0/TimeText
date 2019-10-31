<template>
    <div>
        <div class="row">
            <div class="col-8 offset-sm-1 col-md-6 offset-md-2 offset-lg-1 mb-3">
                <b-input-group>
                    <b-input-group-prepend is-text>
                        <b-form-checkbox switch size="sm" class="mr-n2"
                                         v-on:change="setChecked($event)">
                            <span class="sr-only">around</span>
                        </b-form-checkbox>
                    </b-input-group-prepend>

                    <b-form-select
                            v-model="search">
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
            </div>
        </div>
        <h3 v-if="loading" class="webfont text-muted col-12 no-content">Loading...</h3>
        <h3 v-else-if="!pictureList[0]" class="webfont text-muted col-12 no-content">no content</h3>
        <div class="text-center" v-show="loading">
            <b-spinner variant="secondary" label="Spinning" class="m-5"></b-spinner>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        props: ['username'],
        name: "SearchPicture",
        data: function() {
            return {
                pictureList: [],
                search: 0,
                checked: false,
                loading: false
            };
        },
        mounted: function () {
            const l = localStorage.getItem('search');
            if (l) {
                setTimeout(function () {
                    this.search = l
                }.bind(this), 1000);
            }
        },
        watch: {
            search: function () {
                localStorage.setItem('search', this.search);
                this.getPictureList();
            }
        },
        computed: {
            classtimelist: function() {
                const classlist = [];
                for (let i = 0; i < 25; i++) {
                    classlist.push(
                        ["Mon", "Tus", "Wed", "Thu", "Fri"][Math.floor(i / 5)] +
                        ((i % 5) + 1) +
                        ""
                    );
                }
                return classlist;
            },
        },
        methods: {
            setChecked: function (checked){
                this.checked = (checked);
                this.getPictureList();
            },
            setSearch: function (value) {
                this.search = value;
                this.getPictureList();
            },
            getText: function(p){
                return p.slice(-4)
            },
            getPictureList: function() {
                this.loading = true;
                this.pictureList = [];
                this.$emit('picturelist', this.pictureList);
                let url;
                if (this.checked){
                    url = "/me/around/"+this.search+"?user_name="+this.username;
                }
                else {
                    url = "/me/part/"+this.search+"?user_name="+this.username;
                }
                axios
                    .get(
                        "https://util-api-face.herokuapp.com/clspict" + url
                    )
                    .then(
                        function(response) {
                            this.pictureList = response.data.reverse();
                            this.$emit('picturelist', this.pictureList);
                            console.log(this.pictureList);
                        }.bind(this)
                    )
                    .catch(function(reason) {
                        console.log(reason.response);
                    })
                    .finally(function () {
                        this.loading = false
                    }.bind(this));
            }
        }
    };
</script>

<template>
    <div>
        <div class="row">
            <div v-bind:key="p['id']" v-for="p in picturelist" class="col-6 col-md-4 col-lg-3 mb-3">
                <div class="h-100" :key="p['image_url']">
                    <a :href="encode(p['image_url'])" target="_blank">
                        <div class="card text-black-50 border-0 shadow">
                            <img class="card-img-top card-image-lazy"
                                 data-src="https://placehold.jp/150x150.png"
                                 :src="getThumbnail(p['image_url'], 'm')"
                                 alt="card"/>
                            <div class="card-body">
                                <p class="card-text webfont"><small>{{ getText(p["ymd"].toString()) }}</small></p>
                            </div>
                        </div>
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
        data: function () {
            return {};
        },
        methods: {
            getText: function (p) {
                return p.slice(-4)
            },
            getThumbnail: function (str, type) {
                const url = str.split('.');
                const ext = url.pop();
                return url.join('.') + type + "." + ext;
            },
            encode: function (url) {
                return "/static/image/index.html?url="+ encodeURIComponent(url);
            }
        }
    }
</script>

<style>
    a:hover, a:active {
        text-decoration: none;
    }

    .no-content {
        margin-top: 20vh;
    }

</style>

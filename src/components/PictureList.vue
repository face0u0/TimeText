<template>
    <div class="mt-2">
        <div class="row mb-4" v-for="list in picturelist" v-bind:key="list[0].id+'list'">
            <h4 class="offset-3 col-6 mb-5 text-muted border-bottom">{{getText(list[0]["ymd"].toString())}}</h4>
                <div v-bind:key="p['id']" v-for="p in list" class="col-6 col-md-4 col-lg-3 mb-3">
                    <div class="h-100" :key="p['image_url']">
                        <a :href="encode(p['image_url'])" target="_blank">
                            <div class="card text-black-50 border-0 shadow">
                                <img class="card-img-top card-image-lazy"
                                     data-src="https://placehold.jp/150x150.png"
                                     :src="getThumbnail(p['image_url'], 'm')"
                                     alt="card"/>
                                <div class="card-body">
                                    <p class="card-text webfont"><small>{{ getTime(p.created_at) }}</small></p>
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
                return "/static/image/?url="+ encodeURIComponent(url);
            },
            getTime: function(time){
                const date = new Date(time);
                // date.setHours(date.getHours()+9);
                var h = date.getHours();
                var m = date.getMinutes();

                if (m < 10){
                    m = "0" + m;
                }
                // const s = date.getSeconds();
                return h+":"+m
            }
        }
    }
</script>

<style>
    a:hover, a:active {
        text-decoration: none;
    }

    .no-content {
        margin-top: 10vh;
    }

</style>

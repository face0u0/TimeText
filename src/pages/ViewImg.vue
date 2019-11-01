<template>
    <div>
        <img :src="decodeURIComponent($route.params.url)" style="width: 100%;">
    </div>
</template>

<script>
    export default {
        name: 'ViewImg',
        data: function () {
            return {
            }
        },
        methods: {

        },
    }
</script>

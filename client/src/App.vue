<template>
    <div id="app">
        <div class="header">
            UserID: <b>{{userId}}</b>
        </div>
        <!-- img src="./assets/logo.png" -->

        <router-view class="content"></router-view>

        <div class="footer" v-on:click="clickFooter">
            <span>{{github}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            github: 'https://github.com/catsass19/ScalableWebsocketService',
        };
    },
    methods: {
        clickFooter() {
            window.open(this.github);
        },
    },
    computed: {
        userId() {
            return this.$store.getters.getUserId;
        },
    },
};
</script>

<style>
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
    }

    #app {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .content {
        flex: 1;
    }
    .header {
        padding: 5px;
        background-color: #1995AD;
        color: white;
    }
    .footer {
        text-align: center;
        padding: 5px 0px;
        font-size: smaller;
        background-color: #EEE;
        cursor: pointer;
        color: #888;
    }
    .footer:hover {
        background-color: #888;
        color: #EEE;
    }
</style>

<template>
    <div id="app">
        <div class="header">
            <span>User ID: <b>{{userId}}</b></span>
            <div class="headerPadding"></div>
            <span v-if="serverId !== null">Websocket Server ID: <b>{{serverId}}</b></span>
            <span v-else class="noWS"><b>No WebSocket Connection</b></span>
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
        serverId() {
            return this.$store.getters.getServerId;
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
    .noWS {
        color: #FFC1CC;
    }
    .header {
        padding: 5px;
        background-color: #1995AD;
        color: white;
        display: flex;
    }
    .headerPadding {
        flex: 1;
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

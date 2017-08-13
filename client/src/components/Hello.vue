<template>
    <div class="hello">
        <div class="chatContent">
            <div v-for="item in messages" class="messageDiv">
                <div class="msgUserId">{{item.userId}}</div>
                <div class="msgContent">{{item.message}}</div>
            </div>
        </div>
        <div class="inputArea">
            <md-input-container>
                <label>Say something...</label>
                <md-input v-model="input" @keyup.enter.native="send"></md-input>
            </md-input-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            input: '',
        };
    },
    computed: {
        messages() {
            return this.$store.getters.getMessage;
        },
    },
    methods: {
        send() {
            if (this.input.length) {
                this.$store.dispatch('send', this.input);
                this.input = '';
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        height: inherit;
        display: flex;
        flex-direction: column;
    }
    .chatContent {
        flex: 1;
        overflow-y: auto;
    }
    .inputArea {
        padding: 0px 10px;
    }
    .messageDiv {
        display: flex;
        height: 40px;
        border-bottom: 1px solid #CCC;
        margin: 5px;
    }
    .msgUserId {
        width: 200px;
        line-height: 40px;
        text-align: center;
    }
    .msgContent {
        flex: 1;
        line-height: 40px;
    }
</style>

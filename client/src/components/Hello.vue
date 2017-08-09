<template>
    <div class="hello">
        <div class="chatContent">
        </div>
        <div class="inputArea">
            <md-input-container>
                <label>Say something...</label>
                <md-input></md-input>
            </md-input-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
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
        border: 1px solid #CCC;
        overflow-y: auto;
    }
    .inputArea {
        padding: 0px 10px;
    }
</style>

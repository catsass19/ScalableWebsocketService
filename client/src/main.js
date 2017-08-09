// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as shortid from 'shortid';
import * as VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

store.commit('setUserId', shortid.generate());

const wsURL = `ws://${window.location.host}`;
console.log(`Establishing WS connection with ${wsURL}`);
const ws = new WebSocket(wsURL);

ws.onopen = () => {
    ws.send('ping');
};

ws.onmessage = (e) => {
    console.log(e.data);
};

ws.onclose = () => {
    console.log('ws closed. time to reconnect again');
};

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    store,
});

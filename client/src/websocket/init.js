import store from '../store/store';

let ws = null;
const wsURL = `ws://${window.location.host}/ws`;

export function initWebSocket() {
    ws = new WebSocket(wsURL);

    ws.onopen = () => {
        console.log(`Connected to ${wsURL}`);
        ws.send(JSON.stringify({
            type: 'JOIN',
            userId: store.getters.getUserId,
        }));
    };

    ws.onmessage = (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
        case 'CONFIRM':
            store.commit('setServerId', data.serverId);
            break;
        case 'MESSAGE':
            store.commit('pushMessage', data);
            break;
        default:
            console.log(data);
            break;
        }
    };

    ws.onclose = () => {
        store.commit('setServerId', null);
        ws.send(JSON.stringify({
            type: 'LEAVE',
            userId: store.getters.getUserId,
        }));
        setTimeout(initWebSocket, 1000);
    };
}

export function sendMessage(message) {
    ws.send(JSON.stringify({
        type: 'MESSAGE',
        userId: store.getters.getUserId,
        message,
    }));
}

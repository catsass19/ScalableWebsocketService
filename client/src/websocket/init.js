import store from '../store/store';

let ws = null;

export function initWebSocket() {
    const wsURL = `ws://${window.location.host}/ws`;
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
    };
}

export function getWS() {
    return ws;
}

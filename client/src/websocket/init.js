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
        console.log(e.data);
    };

    ws.onclose = () => {
        ws.send(JSON.stringify({
            type: 'LEAVE',
            userId: store.getters.getUserId,
        }));
    };
}

export function getWS() {
    return ws;
}

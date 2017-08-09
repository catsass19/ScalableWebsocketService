import store from '../store/store';

// let ws = null;

export function initWebSocket() {
    /*
    const wsURL = `ws://${window.location.host}`;
    ws = new WebSocket(wsURL);

    ws.onopen = () => {
        ws.send(JSON.stringify({
            type: 'JOIN',
            userId: store.getters.getUserId,
        }));
    };

    ws.onmessage = (e) => {
        console.log(JSON.parse(e.data));
    };

    ws.onclose = () => {
        ws.send(JSON.stringify({
            type: 'LEAVE',
            userId: store.getters.getUserId,
        }));
    };
    */
}
/*
export function getWS() {
    return ws;
}
*/

const shortid = require('shortid');
const WebSocket = require('ws');

const PORT = process.argv[2];

const wss = new WebSocket.Server({ port: PORT });
const serverId = shortid.generate();

console.log(`Server ${serverId} is running on ${PORT}`);

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log(`message: ${message}`);
        ws.send(`Confirm message from ${serverId}`);
    });
});

function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(`Server ${serverId} broadcasting @ ${(new Date()).toString()}`);
        }
    });

    setTimeout(broadcast, 30000);
};

broadcast();
const shortid = require('shortid');
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 3001});

const serverId = shortid.generate();

console.log(`Server ${serverId} is running`);

wss.on('connection', function(ws) {
    ws.on('message', function(message) {

        console.log(`message: ${message}`);
        ws.send("test");
    });
});
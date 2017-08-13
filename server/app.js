const shortid = require('shortid');
const WebSocket = require('ws');
const PORT = process.argv[2];
const redis = require("redis").createClient();
const sub = redis.duplicate();
const pub = redis.duplicate();

const CHANNEL = 'chatroom';

redis.on('error', function (err) {
    console.log(err);
    process.exit(1);
});

redis.on('connect', function () {
    console.log(`Redis is connected...`);
});


sub.subscribe(CHANNEL);
sub.on('message', function(channel, message) {
    // console.log(channel, message);
    broadcast(message);
});

const wss = new WebSocket.Server({ port: PORT });
const serverId = shortid.generate();

console.log(`Server ${serverId} is running on ${PORT}`);


function heartbeat() {
    this.isAlive = true;
};

wss.on('connection', function connection(ws) {
    ws.isAlive = true;
    ws.on('pong', heartbeat);
    ws.on('message', function incoming(message) {
        // console.log(`message: ${message}`);
        const msgObj = JSON.parse(message);
        switch(msgObj.type) {
            case 'JOIN':
                ws.send(JSON.stringify({
                    type: 'CONFIRM',
                    serverId
                }));
                break;
            case 'MESSAGE':
                pub.publish(CHANNEL, message);
                break;
            default:
                break;
        }
    });
});

function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        if (ws.isAlive === false) return ws.terminate();

        ws.isAlive = false;
        ws.ping('', false, true);
    });
}, 30000);

broadcast();
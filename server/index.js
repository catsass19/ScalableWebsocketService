const Koa = require('koa');
const static = require('koa-static');
const route = require('koa-route');
const websockify = require('koa-websocket');
const shortid = require('shortid');

const serverId = shortid.generate();
const PORT = 3000;

const app = websockify(new Koa());

app.use(static("client/dist"));

app.use(async (ctx) => {
    ctx.body = 'Hello World';
});

app.ws.use(route.all('/', (ctx) => {

    ctx.websocket.on('message', function(message) {
        console.log(message);
        setTimeout(() => {
            ctx.websocket.send('pong');
        }, 3000);
    });

}));

app.listen(PORT);

console.log(`Server ID ${serverId} is running on port: ${PORT}`);
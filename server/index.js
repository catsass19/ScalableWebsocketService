const Koa = require('koa');
const static = require('koa-static');

const app = new Koa();

app.use(static("client/dist"));

app.use(async (ctx) => {
    ctx.body = 'Hello World';
});

app.listen(3000);
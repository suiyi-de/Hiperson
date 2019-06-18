var Koa = require('koa');
var apiRouter = require('./routes/api');
var bodyParser = require('koa-bodyparser');
var serve = require('koa-static');

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  await next();
});
app.use(serve('./public'));
app.use(bodyParser());

app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

app.listen(80);

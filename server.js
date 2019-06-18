var Koa = require('koa');
var apiRouter = require('./routes/api');
var bodyParser = require('koa-bodyparser');
var serve = require('koa-static');
var http = require('http');
var https = require('https');
var fs = require('fs');

const app = new Koa();

// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "*");
//   ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
//   ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
//   await next();
// });
app.use(serve('./public'));
app.use(bodyParser());

app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

// app.listen(80);

http.createServer((req, res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);
httpsServer = https.createServer({
  key: fs.readFileSync('./ssl/private.key', 'utf8'),
  cert: fs.readFileSync('./ssl/cert.crt', 'utf8'),
  ca: fs.readFileSync('./ssl/ca.crt', 'utf8')
}, app.callback()).listen(443);


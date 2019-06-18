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
https.createServer({
  key: fs.readFileSync('./ssl/server.key', 'utf8'),
  cert: fs.readFileSync('./ssl/server.crt', 'utf8'),
  ca: [
    fs.readFileSync('./ssl/gd_bundle_01.crt', 'utf8'),
    fs.readFileSync('./ssl/gd_bundle_02.crt', 'utf8'),
    fs.readFileSync('./ssl/gd_bundle_03.crt', 'utf8')
  ]
}, app.callback()).listen(443);


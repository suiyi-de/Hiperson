var Koa = require('koa');
var apiRouter = require('./routes/api');

const app = new Koa();

app.use(apiRouter.routes())
app.use(apiRouter.allowedMethods())

app.listen(80);

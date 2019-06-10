var Router = require('koa-router');
var visitorController = require('.././controller/visitorController');

const router = new Router({ prefix: '/api' })

router.get('/', async (ctx) => {
  ctx.body = ctx.ip.substr(7);
});

router.get('/visitors', visitorController.index);


module.exports = router

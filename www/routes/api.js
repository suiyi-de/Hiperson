var Router = require('koa-router');
var visitorController = require('.././controller/visitorController');
var musicController = require('.././controller/musicController');

const router = new Router({ prefix: '/api' });

router.get('/', async (ctx) => {
  ctx.body = ctx.ip.substr(7);
});

router.get('/visitors', visitorController.index);
router.all('/music/:id*', (...args) => musicController.all(...args));


module.exports = router

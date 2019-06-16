var Router = require('koa-router');
var visitorController = require('.././controller/visitorController');
var musicController = require('.././controller/musicController');
var articleController = require('.././controller/articleController');

const router = new Router({ prefix: '/api' });

router.get('/', async (ctx) => {
  ctx.body = ctx.ip.substr(7);
});

router.get('/visitors', visitorController.index);
router.all('/music/:id*', (...args) => musicController.all(...args));
router.all('/article/:id*', (...args) => articleController.all(...args));

module.exports = router

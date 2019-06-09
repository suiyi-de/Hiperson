var Router = require('koa-router');
var visitorController = require('.././controller/visitorController');

const router = new Router({ prefix: '/api' })

router.get('/visitors', visitorController.index);


module.exports = router

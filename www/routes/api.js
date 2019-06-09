var Router = require('koa-router');

const router = new Router({ prefix: '/api' })

router.get('/', async (ctx, next) => {
  ctx.body = 'api'
})


module.exports = router

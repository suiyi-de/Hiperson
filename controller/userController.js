const Config = require('../config')

class userController {
  static login(ctx) {
    let pass = ctx.request.body.data.pass
    if (pass !== Config.ADMIN_PASS) {
      ctx.body = {
        status: 'failed'
      }
    } else {
      ctx.body = {
        status: 'success'
      }
    }
  }
}

module.exports = userController;

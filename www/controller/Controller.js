var Model = require('.././model/Model');

class Controller {
  static get model() {
    return Model;
  }

  static async all(ctx) {
    let method = ctx.method;
    switch (method) {
      case 'GET':
        await this.get(ctx);
        break;
      case 'POST':
        await this.store(ctx);
        break;
    }
  }

  static async get(ctx) {
    let result = await this.model.query().paginate();
    ctx.body = result;
  }

  static async store(ctx) {
    try {
        let model = await this.model.query().insert(ctx.request.body.data);
        ctx.body = {
          status: 'success',
          id: model[0]
        }
    } catch (err) {
      ctx.body = {
        status: 'failed',
        msg: err
      }
    }
  }
}

module.exports = Controller;

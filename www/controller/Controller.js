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
      case 'PUT':
        await this.update(ctx);
        break;
    }
  }

  static async get(ctx) {
    let page = ctx.query.page || 1;
    let perPage = ctx.query.per_page || 10;
    let result = await this.model.query().orderBy('created_at', 'desc').paginate(page, perPage);
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

  static async update(ctx) {
    try {
        let condition = {id: ctx.params.id};
        await this.model.query().where(condition).update(ctx.request.body.data);
        let model = await this.model.find(condition);
        ctx.body = {
          status: 'success',
          data: model
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

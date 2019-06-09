var Visitor = require('../model/Visitor');

module.exports =  {
  async index(ctx) {
    const data = await Visitor.query().select();
    ctx.body = { data: data };
  }
}

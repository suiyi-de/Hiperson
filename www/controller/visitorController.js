var Visitor = require('../model/Visitor');

module.exports =  {
  async index(ctx) {
    const data = await new Visitor().query().select();
    ctx.body = { data: data };
  }
}

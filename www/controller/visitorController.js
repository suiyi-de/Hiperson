var Visitor = require('../model/Visitor');

module.exports =  {
  async index(ctx) {
    let ip = ctx.ip.substr(7); // remove '::ffff:'
    let visitor = await Visitor.find({
      ip: ip
    });
    if (visitor === -1) {
      visitor = await Visitor.query().insert({
        ip: ip,
        times: 1
      });
    } else {
      await Visitor.query().where({
        ip: ip
      }).update({
        times: visitor.times + 1
      });
    }
    let count = await Visitor.query().count();
    ctx.body = {
      id: visitor.id || visitor[0],
      times: visitor.times || 1,
      count: count[0]['count(*)']
    };
  }
}

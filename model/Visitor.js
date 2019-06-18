var Model = require('./Model');

class Visitor extends Model {
  static get tableName() {
    return 'visitors';
  }
}

module.exports = Visitor;

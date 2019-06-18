var Model = require('./Model');

class Music extends Model {
  static get tableName() {
    return 'songs';
  }
}

module.exports = Music;

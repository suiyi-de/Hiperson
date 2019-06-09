var knex = require('../database/config');

class Model {
  static get tableName() {
    return null;
  }

  static query() {
    return knex(this.tableName);
  }
}

module.exports = Model;

var knex = require('../database/config');

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  query() {
    return knex(this.tableName);
  }
}

module.exports = Model;

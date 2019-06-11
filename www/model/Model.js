var knex = require('./queryBuilder');

class Model {
  static get tableName() {
    return null;
  }

  static query() {
    return knex(this.tableName);
  }

  static async findAll(condition) {
    let data = await this.query().where(condition).select();
    return data.length === 0 ? -1 : data;
  }

  static async find(condition) {
    let data = await this.findAll(condition);
    return data === -1 ? -1 : data[0];
  }
}

module.exports = Model;

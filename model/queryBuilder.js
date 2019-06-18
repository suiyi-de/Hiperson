var knexQueryBuilder = require('knex/lib/query/builder');
var knex = require('../database/config');

knexQueryBuilder.prototype.paginate = async function (page = 1, perPage = 10) {
  const clone = this.clone();
  let offset = (page - 1) * perPage;
  let count = await knex.count('*').from(clone.as('t1'));
  count = count[0]['count(*)'];
  let totalPage = Math.ceil(count / perPage);
  let data = await this.offset(offset).limit(perPage);
  return {
    data: data,
    count: count,
    totalPage: totalPage !== 0 ? totalPage : 1,
    currentPage: page,
    perPage: perPage
  }
}

module.exports = knex;

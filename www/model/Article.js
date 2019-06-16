var Model = require('./Model');

class Article extends Model {
  static get tableName() {
    return 'articles';
  }
}

module.exports = Article;

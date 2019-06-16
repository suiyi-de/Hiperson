var Article = require('../model/Article');
var Controller = require('./Controller');

class articleController extends Controller {
  static get model() {
    return Article;
  }
}

module.exports = articleController;

var Music = require('../model/Music');
var Controller = require('./Controller');

class musicController extends Controller {
  static get model() {
    return Music;
  }
}

module.exports = musicController;

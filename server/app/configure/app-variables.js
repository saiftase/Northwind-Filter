var path = require('path');
var logMiddleware = require('morgan')('dev');

var rootPath = path.join(__dirname, '../../../');
var indexPath = path.join(rootPath, './browser/index.html');
var env = require(path.join(rootPath, './server/env'));

module.exports = function (app) {
  app.setValue('env', env);
  app.setValue('projectRoot', rootPath);
  app.setValue('indexHTMLPath', indexPath);
  app.setValue('log', logMiddleware);
};

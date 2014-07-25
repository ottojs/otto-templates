
'use strict';

// Modules
var path = require('path');

function main (app, root) {
  // Set View Options
  app.set('views', path.join(root, 'views'));
  app.set('view engine', 'ejs');
}

function render (template) {
  return function (req, res, next) {

    // Send HTML Template
    res.render(template, res.locals);

    next();

  };
}

// Exports
module.exports = {
  main   : main,
  render : render
};


'use strict';

function render (template) {
  return function (req, res, next) {

    // Send HTML Template
    res.render(template, res.locals);

    next();

  };
}

// Exports
module.exports = {
  render : render
};

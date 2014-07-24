
'use strict';

function show_view (req, res, next) {

  // Mark the view we want
  res.locals._view = 'index';

  // Add data for the view
  res.locals.title = 'MyCustomTitle';

  next();

}

// Exports
module.exports = {
  show_view : show_view
};

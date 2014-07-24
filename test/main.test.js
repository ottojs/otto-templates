
'use strict';

// Modules
require('should');

// Subject
var otto_templates = require('../lib/index.js');

describe('Otto Templates', function () {

  describe('.show_view()', function () {

    it('should set res.locals._view and res.locals.title', function () {
      var res = { locals : {} };
      otto_templates.show_view({}, res, function () {
        res.locals.should.have.property('_view').and.equal('index');
        res.locals.should.have.property('title').and.equal('MyCustomTitle');
      });
    });

  });

});

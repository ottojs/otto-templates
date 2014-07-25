
'use strict';

// Modules
require('should');

// Subject
var otto_templates = require('../lib/index.js');

describe('Otto Templates', function () {

  describe('.render()', function () {

    it('should use res.render to render the template', function () {

      var called = false;
      var res = {
        render : function () {
          called = true;
        }
      };

      var middleware = otto_templates.render();
      middleware({}, res, function () {
        called.should.equal(true);
      });

    });

    it('should use a custom template name when provided', function () {

      var res = {
        render : function (template, data) {
          template.should.equal('my-custom-template');
        }
      };

      var middleware = otto_templates.render('my-custom-template');
      middleware({}, res, function () {});

    });

    it('should use res.locals for data when rendering a template', function () {

      var res = {
        locals : { key : 'value', hello : 'world' },
        render : function (template, data) {
          data.should.eql({ key : 'value', hello : 'world' });
        }
      };

      var middleware = otto_templates.render('template');
      middleware({}, res, function () {});

    });

  });

});


'use strict';

// Modules
require('should');
var supertest = require('supertest');
var express   = require('express');

// New Express App
var app = express();

// Subject
var otto_templates = require('../lib/index.js');

// Setup Templates
otto_templates.main(app, __dirname + '/../');

// GET /template
app.get('/template', [
  function (req, res, next) {
    res.locals = { title : 'MyCustomTitle' };
    next();
  },
  otto_templates.render('template')
]);

// Bind SuperTest
var request = supertest(app);

describe('Otto Templates', function () {

  describe('GET /template', function () {

    it('should respond with 200', function (done) {
      request.get('/template')
        .expect('Content-Type', /html/)
        .expect(200)
        .expect(/MyCustomTitle/)
        .end(done);
    });

  });

});

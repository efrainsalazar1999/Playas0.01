'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_authCoordinador = require('../middlewares/authenticated');

var api = express.Router();

api.get('/probando-controlador', md_authCoordinador.ensureAuth ,UserController.pruebas);
api.post('/register',UserController.saveUser);
api.post('/login',UserController.loginUser);
api.post('/decode',UserController.readToken);

module.exports = api;
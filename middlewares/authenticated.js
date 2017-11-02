'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta'

exports.ensureAuth = function(req, res, next){
	if(!req.headers.authorization){
		return res.status(403).send({message: 'La peticion no tiene la cabecera de autenticacion'});

	}

	var token = req.headers.authorization.replace(/['"]+/g,'');
	try{
		var payload = jwt.decode(token, secret);

		if(payload.role != 1){
			return res.status(401).send({message: 'Nivel de acceso no valido'});
		}

	}catch(ex){
		console.log(ex);
		return res.status(403).send({message: 'Token no valido'});
	}

	req.user = payload;
	next();
};
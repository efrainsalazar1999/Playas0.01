'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt');


function pruebas(req, res){
	res.status(200).send({
		message: 'Probando una accion del controlador de usuario con Node y Mongo'
	});

}

function saveUser(req, res){
	var user = new User();

	var params = req.body;

	console.log(params);

	user.name = params.name;
	user.surname = params.surname;
	user.email = params.email;
	user.role = params.role;
	user.playa = "59f34dd4aae242e29136e238";
	console.log(req.body);
	if(params.password){
		//Encrptar contraseña y guardar datos
		bcrypt.hash(params.password, null,null,function(err,hash){
			user.password = hash;
			if(user.name != null && user.surname != null && user.email != null){
					//Guarda Usuario
					user.save((err,userStored) => {
						if(err){
							res.status(500).send({message: 'error al guardar el usuario'});
						}else{
							if(!userStored){
								res.status(404).send({message: 'no se ha registrado el usuario'});
							}else{
								res.status(200).send({user: userStored});
							}
						}
					});
			}else{
				res.status(200).send({message: 'Introduce todos los campos'});

			}
		});
	}else{

		res.status(200).send({message: 'Introduce la contraseña'});
	}
}

function loginUser(req,res){
	console.log('entra');
	console.log(req.body);
	var params = req.body;
	var email = params.email;
	var password = params.password;
	var gethash = params.gethash;

	User.findOne({email: email.toLowerCase()}, (err,user) => {
			if (err) {
				res.status(500).send({message: ' Error en la petición'});
			}else{
				if(!user){
					res.status(404).send({message: ' Usuario no existe'});
				}else{
					bcrypt.compare(password, user.password, function(err,check){
						if(check){
							if(params.gethash){
								//devolver un token de jwt
								res.status(200).send({token: jwt.createToken(user)});
							}else{
								res.status(200).send({user});
							}
						}else{
							console.log(params);
							res.status(404).send({message: ' No ha podido logearse'});
						}
					})
				}
			}
		
	});
}

function readToken(req,res){
	console.log('entra a la revision');
	//console.log(req.body)
	var params = req.body;
	console.log("parametro prooooooooo");
	console.log(params);
	//var token = parametros.token;
	//var readToken = jwt.readToken(parametros);
	//console.log("parametro leido");
	//console.log(readToken);
	res.status(200).send({user: jwt.readToken(params.token)});

}

module.exports = {
	pruebas,
	saveUser,
	loginUser,
	readToken
}
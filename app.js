'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// cargar rutas
var user_routes = require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras http


app.use((req,res,next)=>{

	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Credentials", true);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');

	next();
});

//app.use('/api/decode', user_routes);
app.use('/api', user_routes);
// rutas base


/*app.get('/pruebas',function(req, res){

	res.status(200).send({message: 'Bienvenido al curso'});

});
*/

module.exports = app;
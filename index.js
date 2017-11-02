'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 8080; 
mongoose.connect('mongodb://localhost:27017/playas', (err, res) => {
	
	if(err){
		console.log("La base de datos funciona mal...");
		throw err;
	}else{
		console.log("La base de datos funciona perfecta");

		app.listen(port, function(){
			console.log("servidor del api rest http://localhost:"+port);


		});
	}

});